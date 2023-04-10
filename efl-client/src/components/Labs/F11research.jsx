import React from 'react';
import { useDispatch } from 'react-redux';
import { setArray } from '../../redux/slices/ArraySlice';

function F11research(props) {
  const [arrayOfTable, setArrayOfTable] = React.useState({});

  const dispatch = useDispatch();

  React.useEffect(() => {
    switch (props.num) {
      case 1:
        dispatch(setArray({ name: 'table1', value: arrayOfTable }));
        break;
      case 2:
        dispatch(setArray({ name: 'table2', value: arrayOfTable }));
        break;
      case 3:
        dispatch(setArray({ name: 'table3', value: arrayOfTable }));
        break;
      case 4:
        dispatch(setArray({ name: 'table4', value: arrayOfTable }));
        break;
    }
  }, [arrayOfTable]);

  return (
    <>
      {props.children}
      <table className="iksweb">
        <thead>
          <tr>
            <th>{props.colNames[0]}</th>
            <th>{props.colNames[1]}</th>
          </tr>
        </thead>
        <tbody>
          {props.initialArray &&
            props.initialArray.map((value, index) => (
              <tr key={`${index}_${value}`}>
                <td>{value}</td>
                <td>
                  <input
                    type="number"
                    name={value}
                    required="required"
                    onChange={(e) =>
                      setArrayOfTable({ ...arrayOfTable, [e.target.name]: e.target.value })
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default F11research;
