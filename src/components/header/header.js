import React from 'react';

import logo from '../../image/logo/logo-starwars.png'

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu-list">
        <ul className="d-flex">
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default Header;