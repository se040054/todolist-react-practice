import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  p {
    font-size: 14px;
    font-weight: 300;
    margin: 2rem 0 1rem;
  }
`;

const StyledButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  vertical-align: baseline;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  outline: 0;

  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = ({ count }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    Swal.fire({ // 
      title: '已登出!',
      text: '頁面將在2秒後自動跳轉!',
      icon: 'success',
      confirmButtonText: '繼續',
      timer: 2000,
      position: 'top',
      willClose: () => {
        logout();
        navigate('/login'); // 注意swal是異步函式 如果navigate放在外部可能會搶先執行並且觸發effect
      },
    });
  };
  return (
    <StyledFooter>
      <p>剩餘項目數：{count}</p>
      <StyledButton onClick={handleClick}>登出</StyledButton>
    </StyledFooter>
  );
};

export default Footer;
