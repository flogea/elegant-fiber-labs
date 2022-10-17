import React from 'react';

import { Context } from '../../Context';

function TabComponent({ array }) {
  const { table2, setTable2 } = React.useContext(Context);

  const handleChangeTable2 = (event) => {
    setTable2({ ...table2, [event.target.name]: event.target.value });
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
              onChange={handleChangeTable2}
            />
          </div>
        ))}
    </div>
  );
}

export default TabComponent;
