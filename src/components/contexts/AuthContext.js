import { createContext, useContext, useEffect, useState } from 'react';
import { checkPermission, login, register } from 'api/auth';
import * as jwt from 'jsonwebtoken';
import { useLocation } from 'react-router-dom';

const defaultAuthContext = {
  isAuthenticated: false, // 注意這邊先不設置false 以防止effect早於context執行
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  register: null, // 註冊方法
  login: null, // 登入方法
  logout: null, // 登入方法
}; // 注意 這邊只是先定義物件屬性 實際上這邊的值會被下面狀態取代，這意味著就算你把這裡整段刪掉都沒關系

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // 在這支context裡面掛載驗證成功或失敗，注意這邊先不設置false 以防止effect早於context執行
  const [payload, setPayload] = useState(null); // 在這支context裡面掛載使用者payload
  const { pathname } = useLocation();
  const providerRegister = async (data) => {
    // data 為使用者傳入的註冊資料
    const { success, authToken } = await register({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    const tempPayload = jwt.decode(authToken); // 將註冊後得到的token解碼
    if (tempPayload) {
      // 若解碼成功 將驗證成功及此payload掛載context
      setPayload(tempPayload);
      setIsAuthenticated(true);
      localStorage.setItem('authToken', authToken); // token 存放於本機空間 重啟瀏覽器時仍保留token，用此token丟進context進行驗證
    } else {
      // 驗證失敗 清空
      setPayload(null);
      setIsAuthenticated(false);
    }
    return success;
  };

  const providerLogin = async (data) => {
    // data 為使用者傳入的登入資料
    const { success, authToken } = await login({
      username: data.username,
      password: data.password,
    });
    const tempPayload = jwt.decode(authToken); // 將登入後得到的token解碼
    if (tempPayload) {
      // 若解碼成功 將驗證成功及此payload掛載context
      setPayload(tempPayload);
      setIsAuthenticated(true);
      localStorage.setItem('authToken', authToken);
    } else {
      // 驗證失敗 清空
      setPayload(null);
      setIsAuthenticated(false);
    }
    return success;
  };
  const providerLogout = async () => {
    localStorage.removeItem('authToken');
    setPayload(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // 這個東西會在provider包覆層根據pathname變化自動執行
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setPayload(null);
        setIsAuthenticated(false);
        return;
      }
      const isLogin = await checkPermission(authToken);
      if (isLogin) {
        const tempPayload = jwt.decode(authToken);
        setPayload(tempPayload);
        setIsAuthenticated(true);
      } else {
        setPayload(null);
        setIsAuthenticated(false);
      }
    };
    checkTokenIsValid();
  }, [pathname]); // 當網址變更時pathname會變更 觸發effect驗證機制

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload && {
          // 先檢查payload使否存在 再取值
          id: payload.sub, // 依據後端jwt sign時payload.sub 為使用者id
          name: payload.name, // 依據後端jwt sign 時 payload.name 為使用者name
        },
        register: providerRegister,
        login: providerLogin,
        logout: providerLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
