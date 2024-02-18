import React from 'react'
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/slices/auth";

export default function Navbar() {

  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className='navbar'>
      <ul>
        <li>Hi, {user}</li>
      </ul>
      <button className='button' onClick={handleLogout}>Logout</button>
    </nav>
  )
}
