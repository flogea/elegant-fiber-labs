import React from 'react';

import '../../styles/Labs.scss';

import { Context } from '../../Context';

function Performers() {
  const { performers, setPerformers, disabledInp } = React.useContext(Context);
  const [errors, setErrors] = React.useState(null);

  const handleChangePerformer = (event) => {
    setPerformers({ ...performers, [event.target.name]: event.target.value });
  };

  const checkEmail = (event) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!event.target.value || regex.test(event.target.value) === false) {
      setErrors('!');
      return false;
    }
    setErrors(null);
    setPerformers({ ...performers, [event.target.name]: event.target.value });
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
            value={performers.performers}
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
            value={performers.group}
            disabled={disabledInp ? 'disabled' : false}
          />
          {disabledInp ? null : <span htmlFor="group">Группа</span>}
          <i></i>
        </div>
        <div className="input__data">
          <input
            type="email"
            name="email"
            className="validate"
            required="required"
            onChange={checkEmail}
            value={performers.email}
            disabled={disabledInp ? 'disabled' : false}
          />
          {disabledInp ? null : <span>E-mail ответственного исполнителя</span>}
          <i></i>
          <div className="errorInfo">{errors}</div>
        </div>
      </div>
    </div>
  );
}

export default Performers;
