import React from 'react';

import '../styles/Home.scss';

import logo from '../images/logo.svg';
import textedLogo from '../images/logo_with_text.svg';
import { Context } from '../Context';

function Navbar() {
  const { darkMode, setDarkMode } = React.useContext(Context);
  React.useEffect(() => {
    setDarkMode(Boolean(JSON.parse(localStorage.getItem('darkMode'))));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="">
      <nav>
        <div className="logo">
          <a href="/" className="brand-logo">
            <img src={textedLogo} alt="Logo" />
          </a>
          {/* <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a> */}
        </div>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
      </nav>

      {/* <div className="navlist">
          <ul className="">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">Лабоньки</a>
            </li>
            <li>
              <a href="/materials">Методички</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navlist-mobile">
        <ul id="mobile-demo">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">Лабоньки</a>
          </li>
          <li>
            <a href="/materials">Методички</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar;
