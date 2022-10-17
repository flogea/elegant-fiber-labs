import React from 'react';

import { Context } from '../../Context';

function TabComponent({ array }) {
  const { table1, setTable1 } = React.useContext(Context);

  const handleChangeTable1 = (event) => {
    setTable1({ ...table1, [event.target.name]: event.target.value });
  };

  return (
    <div className="row">
      {array &&
        array.map((name, index) => (
          <div key={`${name}_${index}`} className="col s12 m6 l6">
            <label>{name}</label>
            <input
              key={`${name}_${index}`}
              type="number"
              step="any"
              name={name}
              className="input-table"
              onChange={handleChangeTable1}
            />
          </div>
        ))}
    </div>
  );
}

export default TabComponent;
