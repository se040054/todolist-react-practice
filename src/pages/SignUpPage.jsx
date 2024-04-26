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

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();
  const handleClick = async () => {
    if (username.length < 0 || (password.length < 0 && email.length < 0)) {
      return;
    }
    setSuccess(
      await register({
        username,
        email,
        password,
      }),
    );
    Swal.fire({
      title: '註冊失敗!',
      text: '欄位錯誤或帳號已被使用!',
      icon: 'error',
      confirmButtonText: '重試',
      timer: 3000,
      position: 'top',
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (success) {
        Swal.fire({
          title: '註冊成功!',
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
  }, [navigate, success, isAuthenticated]); // 這裡要放nave不然git action會出錯

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

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
          label="信箱"
          placeholder="請輸入信箱"
          value={email}
          onChange={(emailInputValue) => {
            setEmail(emailInputValue);
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

      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>登入</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
