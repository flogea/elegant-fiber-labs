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

  const handleChangeTable1 = (event) => {
    setTable1({ ...table1, [event.target.name]: event.target.value });
  };

  // const onBlur = () => {
  //   setDirty(true);
  // };

  // useEffect(() => {
  //   for (const validation in validations) {
  //     switch (validation) {
  //       case 'isEmpty':
  //         table1 ? setEmpty(false) : setEmpty(true);
  //         break;
  //     }
  //   }
  // }, [table1]);

  // const useValidation = (value, validations) => {
  //   const [isEmpty, setEmpty] = useState(true);
  //   const [isDirty, setDirty] = useState(false);

  //   const onBlur = () => {
  //     setDirty(true);
  //   };

  //   useEffect(() => {
  //     for (const validation in validations) {
  //       switch (validation) {
  //         case 'isEmpty':
  //           value ? setEmpty(false) : setEmpty(true);
  //           break;
  //       }
  //     }
  //   }, [value]);

  //   return {
  //     isEmpty,
  //     onBlur,
  //   };
  // };

  //const name = useInput('', { isEmpty: true });

  useEffect(() => {
    console.log('init');
  }, [table1]);

  return (
    <div className="row">
      {array &&
        array.map((name, index) => (
          <div key={`${name}_${index}`} className="col s12 m6 l6">
            <label>
              {name}
              {name.isDirty && name.isEmpty && console.log('error')}
            </label>
            <input
              key={`${name}_${index}`}
              value={name.value}
              type="number"
              step="any"
              name={name}
              className="input-table"
              onChange={handleChangeTable1}
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
