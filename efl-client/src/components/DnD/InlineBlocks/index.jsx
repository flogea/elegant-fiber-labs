import React from 'react';
import { useDispatch } from 'react-redux';

import { setIsOpen } from '../../../redux/slices/SideMenuStatus';
import { setComponents } from '../../../redux/slices/ConstructorArraySlice';

import './index.scss';

import {
  FileComponent,
  GeneratingComponent,
  InputComponent,
  PictureComponent,
  TableComponent,
  TextComponent,
} from '..';

const components = {
  text: {
    title: 'text',
    name: 'Текст',
    data: <TextComponent />,
  },
  table: {
    title: 'table',
    name: 'Таблица',
    data: <TableComponent />,
  },
  picture: {
    title: 'picture',
    name: 'Картинка',
    data: <PictureComponent />,
  },
  generating: {
    title: 'generating',
    name: 'Генерируемые значения',
    data: <GeneratingComponent />,
  },
  input: {
    title: 'input',
    name: 'Поля для ввода',
    data: <InputComponent />,
  },
  file: {
    title: 'file',
    name: 'Файлы',
    data: <FileComponent />,
  },
};

function Blocks() {
  const dispatch = useDispatch();

  const showSideMenu = () => {
    dispatch(setIsOpen(true));
  };

  const addComponentToConstructor = (e) => {
    const name = e.target.getAttribute('name');
    const componentId = Date.now();
    const componentData = components[name].data;
    dispatch(setComponents({ componentId, componentData }));
  };

  return (
    <div className="inlineMenu">
      <button className="allBlocks" onClick={showSideMenu}>
        Все блоки
      </button>
      <ul className="blocks">
        <li onClick={addComponentToConstructor} name={components.text.title}>
          Текст
        </li>
        <li onClick={addComponentToConstructor} name={components.table.title}>
          Таблица
        </li>
        <li onClick={addComponentToConstructor} name={components.file.title}>
          Файл
        </li>
        <li onClick={addComponentToConstructor} name={components.picture.title}>
          Картинка
        </li>
      </ul>
    </div>
  );
}

export default Blocks;
