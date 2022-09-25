import React from 'react';

import '../../styles/Labs.scss';

import { Context } from '../../Context';

function FooterLab() {
  const { setPhoto } = React.useContext(Context);

  const handleChangePhoto = (event) => {
    //setPhoto(event.target.files);
    const file = event.target.files;
    const f = file[0];
    if (!f.type.match('image.*')) {
      alert('Тутъ место для Ваших мордашек!');
    }
    const reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        const span = document.getElementById('output');
        span.innerHTML = [
          '<img className="main-text" title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />',
        ].join('');
      };
    })(f);
    reader.readAsDataURL(f);
  };

  return (
    <div>
      <h2>Подтверждение работы</h2>
      <div className="row">
        <div className="main-text">
          Фотографии всех участников работы со стендом лабораторной работы
        </div>
        <div className="file">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={handleChangePhoto} required="required" />
          </div>
          <div class="row">
            <span id="output"></span>
          </div>
        </div>
      </div>
      <div className="main-text">Предъявите заполненный протокол преподавателю.</div>
      <div className="main-text"></div>
      <div className="row">
        <div className="input col subm">
          <input type="text" name="code" required="required" />
          <span>Код подтверждения</span>
          <i></i>
        </div>
      </div>
    </div>
  );
}

export default FooterLab;
