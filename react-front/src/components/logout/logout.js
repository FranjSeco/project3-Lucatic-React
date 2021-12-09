import React from 'react';

import { useNavigate } from 'react-router-dom';
import './logout.css';


export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/');
  }
  return (
    <div className='logout__container'>
      <button onClick={handleLogout} className='logout__button'>Logout</button>
    </div>
  )
}