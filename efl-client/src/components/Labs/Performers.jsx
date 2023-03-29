import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Labs.scss';

import { Context } from '../../Context';
import { setPerformers } from '../../redux/slices/PerformerSlice';

function Performers() {
  const { disabledInp } = React.useContext(Context);
  const [errors, setErrors] = React.useState(null);

  const performers = useSelector((state) => state.PerformerSlice.performers);
  const group = useSelector((state) => state.PerformerSlice.group);
  const email = useSelector((state) => state.PerformerSlice.email);

  const dispatch = useDispatch();

  const handleChangePerformer = (event) => {
    dispatch(setPerformers({ name: event.target.name, value: event.target.value }));
  };

  React.useEffect(() => {
    for (var obj in performers) {
      if (performers[obj] !== '') {
        localStorage.setItem(obj, JSON.stringify(performers[obj]));
      }
    }
  });

  const checkEmail = (event) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!event.target.value || regex.test(event.target.value) === false) {
      setErrors(true);
      //return false;
    } else {
      setErrors(null);
    }
    dispatch(setPerformers({ name: event.target.name, value: event.target.value }));
    return true;
  };

  return (
    <div className="performers">
      <h2>Исполнители</h2>
      <div className="perform__data">
        <div className="input__data">
          <input
            type="text"
            name="performers"
            className="validate"
            required="required"
            onChange={handleChangePerformer}
            value={performers}
            disabled={disabledInp ? 'disabled' : false}
          />
          {disabledInp ? null : <span htmlFor="performers">Фамилии И.О. исполнителей</span>}
          <i></i>
        </div>
        <div className="input__data">
          <input
            type="text"
            name="group"
            className="validate"
            required="required"
            onChange={handleChangePerformer}
            value={group}
            disabled={disabledInp ? 'disabled' : false}
          />
          {disabledInp ? null : <span htmlFor="group">Группа</span>}
          <i></i>
        </div>
        <div className="input__data" style={errors ? { background: '#ffe6e6' } : null}>
          <input
            type="email"
            name="email"
            className="validate"
            required="required"
            onChange={checkEmail}
            value={email}
            disabled={disabledInp ? 'disabled' : false}
          />
          {disabledInp ? null : <span>E-mail ответственного исполнителя</span>}
          <i></i>
          {/* <div className="errorInfo">{errors}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Performers;
