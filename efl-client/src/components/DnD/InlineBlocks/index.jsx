import React from 'react';
import { useDispatch } from 'react-redux';

import { setIsOpen } from '../../../redux/slices/SideMenuStatus';

import './index.scss';

function Blocks() {
  const dispatch = useDispatch();

  const showSideMenu = () => {
    dispatch(setIsOpen(true));
  };

  return (
    <div className="inlineMenu">
      <button className="allBlocks" onClick={showSideMenu}>
        Все блоки
      </button>
      <ul className="blocks">
        <li>Текст</li>
        <li>Таблица</li>
        <li>Файл</li>
        <li>Картинка</li>
      </ul>
    </div>
  );
}

export default Blocks;
