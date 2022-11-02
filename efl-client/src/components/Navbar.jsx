import React from 'react';

import '../styles/Home.scss';

import logo from '../images/logo.svg';

function Navbar() {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <a href="/" className="brand-logo">
            <img src={logo} alt="Logo" />
          </a>
          {/* <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a> */}
        </div>
        <div className="navlist">
          <ul className="">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">Лабы</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
            <li>
              <a href="/">Эбаут</a>
            </li>
          </ul>{' '}
        </div>
      </nav>
      {/* <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul> */}
    </>
  );
}

export default Navbar;
