import React, { useState, useEffect } from 'react';

import { Context } from '../../Context';
import { styles } from '../../styles/Labs.scss';

// const useInput = (initialValue, validations) => {
//   const [value, setValue] = useState(initialValue);
//   const valid = useValidation(value, validations);

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   return {
//     value,
//     onChange,
//     ...valid,
//   };
// };

// const useValid = () => {
//   const [isDirty, setDirty] = useState(false);
//   const [isEmpty, setEmpty] = useState(true);
//   const [value, setValue] = useState('');
// };

function TabComponent({ array }) {
  const { table1, setTable1 } = React.useContext(Context);
  const [errors, setErrors] = React.useState(null);

  const handleChangeTable1 = (event) => {
    setTable1({ ...table1, [event.target.name]: event.target.value });
  };

  const isEmpty = (event) => {
    console.log(errors);
    if (!event.target.value) {
      setErrors('!');
      return false;
    }
    setErrors(null);
    setTable1({ ...table1, [event.target.name]: event.target.value });
    return true;
  };

  return (
    <div className="row">
      {array &&
        array.map((name, index) => (
          <div key={`${name}_${index}`} className="col s12 m6 l6">
            <label>{name}</label>
            <input
              key={`${name}_${index}`}
              value={name.value}
              type="number"
              step="any"
              name={name}
              className="input-table"
              onBlur={isEmpty}
              //onBlur={(e) => name.onBlur(e)}
              inputMode="numeric"
              required="required"
              pattern="[1-9]"
            />
          </div>
        ))}
    </div>
  );
}

export default TabComponent;
