import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from 'components/contexts/AuthContext';
const LoginPage = () => {
  const navigate = useNavigate(); // 記得在組件內
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useAuth();
  const [success, setSuccess] = useState(false);
  const handleClick = async () => {
    if (username.length < 0 || password.length < 0) return;
    setSuccess(
      await login({
        username,
        password,
      }),
    );
    Swal.fire({
      title: '登入失敗!',
      text: '帳號或密碼錯誤',
      icon: 'error',
      confirmButtonText: '重試',
      timer: 2000,
      position: 'top',
    });
  };
  useEffect(() => {
    if (isAuthenticated) {
      if (success) {
        Swal.fire({
          title: '已登入!',
          text: '頁面將在2秒後自動跳轉!',
          icon: 'success',
          confirmButtonText: '繼續',
          timer: 2000,
          position: 'top',
          willClose: () => {
            navigate('/todo');
          },
        });
      } else {
        Swal.fire({
          title: '已經是登入狀態!',
          text: '頁面將在2秒後自動跳轉!',
          icon: 'success',
          confirmButtonText: '繼續',
          timer: 2000,
          position: 'top',
          willClose: () => {
            navigate('/todo');
          },
        });
      }
    }
  }, [success, isAuthenticated]); // AC的作法會將navigate掛載dep 然而navigate是一個函式並且不會更新，不建議這樣做
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => {
            setUsername(nameInputValue);
          }}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => {
            setPassword(passwordInputValue);
          }}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>

      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
