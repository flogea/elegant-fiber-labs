import React from 'react';

import '../styles/Home.scss';

import { Context } from '../Context';

function Categories({ items, onClickItem }) {
  const { activeItem, setActiveItem, darkMode } = React.useContext(Context);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className={darkMode ? 'categories dark' : 'categories'}>
      <select onChange={(e) => onSelectItem(e.target.value ? e.target.value : 'Все')}>
        <option
          className={activeItem === 'Все' ? 'active' : ''}
          onChange={() => onSelectItem('Все')}
          value="Все">
          Все
        </option>
        {items &&
          items.map((name, index) => (
            <option
              className={activeItem === name ? 'active' : ''}
              onChange={() => onSelectItem(index)}
              key={`${name}_${index}`}
              value={name}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Categories;
