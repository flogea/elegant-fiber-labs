import React from 'react';

import { Context } from '../../Context';

function TabComponent({ array }) {
  const { table2, setTable2 } = React.useContext(Context);
  const [isEmpty, setEmpty] = React.useState(false);

  const handleChangeTable2 = (event) => {
    if (!event.target.value === '') {
      setEmpty(false);
      setTable2({ ...table2, [event.target.name]: event.target.value });
    } else {
      setEmpty(true);
    }
  };

  const handleBlur = (event) => {
    console.log(event.target.value);
    if (!(event.target.value === '')) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };

  return (
    <div className="row">
      {array &&
        array.map((name, index) => (
          <div key={`${name}_${index}`} className="col s12 m6 l6">
            <label>{name}</label>
            <input
              style={isEmpty ? { borderColor: 'red' } : { borderColor: 'green' }}
              key={`${name}_${index}`}
              type="number"
              step="any"
              name={name}
              className="input-table"
              onChange={handleChangeTable2}
              onBlur={handleBlur}
              required="required"
              inputMode="numeric"
              pattern="[1-9]"
            />
          </div>
        ))}
    </div>
  );
}

export default TabComponent;
