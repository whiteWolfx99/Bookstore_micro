import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/userAvatar.png';

const Navbar = () => (
  <div className="Navbar">
    <nav>
      <div className="navbar-header">
        <div className="Logo">
          <h1>Bookstore CMS</h1>
        </div>
        <div className="Links">
          <Link className="Links-item" to="/">Books</Link>
          <Link className="Links-item" to="/categories">Categories</Link>
        </div>
      </div>
      <div className="avatar">
        <img src={Avatar} alt="avatar" />
      </div>
    </nav>
  </div>
);

export default Navbar;
