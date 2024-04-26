import { AuthProvider } from 'components/contexts/AuthContext';
import './App.scss';
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const basename = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="signup" element={<SignUpPage />}></Route>
            <Route path="todo" element={<TodoPage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
            <Route></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;