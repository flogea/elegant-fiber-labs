import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  FileComponent,
  GeneratingComponent,
  InputComponent,
  PictureComponent,
  TableComponent,
  TextComponent,
} from '../';

import './index.scss';
import { setIsOpen } from '../../../redux/slices/SideMenuStatus';

const allBlocks = [
  {
    name: 'Текст',
    data: <TextComponent />,
  },
  {
    name: 'Таблица',
    data: <TableComponent />,
  },
  {
    name: 'Картинка',
    data: <PictureComponent />,
  },
  {
    name: 'Генерируемые значения',
    data: <GeneratingComponent />,
  },
  {
    name: 'Поля для ввода',
    data: <InputComponent />,
  },
  {
    name: 'Файлы',
    data: <FileComponent />,
  },
];

function LeftMenu() {
  const isOpen = useSelector((state) => state.SideMenuStatus.isOpen);
  const dispatch = useDispatch();

  const closeSideMenu = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <div className={`leftMenu ${isOpen ? 'open' : ''}`} onClick={closeSideMenu}>
      {allBlocks.map((block, index) => (
        <div className="blockInLeftPanel" key={index}>
          {block.name}
        </div>
      ))}
    </div>
  );
}

export default LeftMenu;
