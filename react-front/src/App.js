import React from 'react';

import { Login } from './components/login/login';
import { Main } from './components/main/main';

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();
  const autoLogin = () => {
    if (localStorage.length > 2) {
      navigate('/main');
    }
  }

  React.useEffect(() => {
    document.title = 'Proyecto Final React';
    autoLogin();
  }, []);

  return (
    <div className="App">
      <Routes >
        <Route exact path="/" element={<Login />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
