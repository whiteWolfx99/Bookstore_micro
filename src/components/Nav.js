import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <div className="Logo">
        <h1>Bookstore </h1>
      </div>
      <div className="Links">
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
