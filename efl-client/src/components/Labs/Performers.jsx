import React from 'react';

import '../../styles/Labs.scss';

import { Context } from '../../Context';

function Performers() {
  const { performers, setPerformers } = React.useContext(Context);

  const handleChangePerformer = (event) => {
    setPerformers({ ...performers, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Исполнители</h2>
      <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
        <div className="row perform">
          {/* <div className="input col s12 m6 l6">
            <input
              type="text"
              name="fio"
              className="validate"
              onChange={handleChangePerformer}
              required="required"
            />
            <span htmlFor="fio">Ответственный исполнитель (Фамилия И.О.)</span>
            <i></i>
          </div> */}
          <div className="input col s12 m6 l6">
            <input
              type="text"
              name="performers"
              className="validate"
              required="required"
              onChange={handleChangePerformer}
            />
            <span htmlFor="performers">Фамилии И.О. исполнителей</span>
            <i></i>
          </div>
          <div className="input col s12 m6 l6">
            <input
              type="text"
              name="group"
              className="validate"
              required="required"
              onChange={handleChangePerformer}
            />
            <span htmlFor="group">Группа</span>
            <i></i>
          </div>
          <div className="input col s12 m6 l6">
            <input
              type="email"
              name="email"
              className="validate"
              required="required"
              onChange={handleChangePerformer}
            />
            <span>E-mail ответственного исполнителя</span>
            <i></i>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Performers;
