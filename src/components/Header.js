import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator"> Calculator</Link>
      </li>
      <li>
        <Link to="/quotes"> Quotes </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
