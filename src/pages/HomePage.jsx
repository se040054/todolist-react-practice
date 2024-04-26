import { useAuth } from 'components/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        title: '即將跳轉!',
        text: '頁面將在2秒後自動跳轉!',
        icon: 'success',
        confirmButtonText: '繼續',
        timer: 2000,
        position: 'top',
        willClose: () => {
          navigate('/todo');
        },
      });
    } else if (isAuthenticated===false) {
      Swal.fire({
        title: '即將跳轉!',
        text: '頁面將在2秒後自動跳轉!',
        icon: 'success',
        confirmButtonText: '繼續',
        timer: 2000,
        position: 'top',
        willClose: () => {
          navigate('/login');
        },
      });
    }
  }, [navigate, isAuthenticated]); // 這裡要放nave不然git action會出錯
};

export default HomePage;
