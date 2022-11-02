import React from 'react';
import { Context } from '../Context';

import '../styles/Home.scss';

function Categories({ items, onClickItem }) {
  const { activeItem, setActiveItem } = React.useContext(Context);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === name ? 'active' : ''}
              onClick={() => onSelectItem(name)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
