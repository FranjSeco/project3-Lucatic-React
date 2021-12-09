import React from 'react';
import { Logout } from '../logout/logout';
import './navbar.css'

export const Navbar = () => {

  const currentUser = localStorage;

  return (
    <header>
      <div className='user__name'>
        <p className='user__name-name'>{currentUser.name}</p>
      </div>
      <Logout />
    </header>
  );
}