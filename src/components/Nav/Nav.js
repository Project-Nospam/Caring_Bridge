import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/dash">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="/profile">
            Profile page
          </Link>
        </li>
        <li>
          <Link to="/site">
            Site PAge
          </Link>
        </li>
        <li>
          <Link to="/admin">
            Admin Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
