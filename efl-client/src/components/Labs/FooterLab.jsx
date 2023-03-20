import React from 'react';

import '../../styles/Labs.scss';

import { Context } from '../../Context';

function FooterLab(props) {
  const { setPhoto, quantity, setQuantity, secretKey, setSecretKey } = React.useContext(Context);
  const [prevPhoto, setPrevPhoto] = React.useState('');

  const handleChangeQuantity = (event) => {
    setQuantity({ ...quantity, [event.target.name]: event.target.value });
  };

  const handleChangeSecret = (event) => {
    setSecretKey({ ...secretKey, [event.target.name]: event.target.value });
  };

  const getBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      cb(reader.result);
    };
    reader.onerror = (err) => {
      console.log('Error: ', err);
    };
  };

  const handleChangePhoto = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (!file.type.match('image.*')) {
      alert('Попробуйте что-нибудь другое');
    }
    const reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        const span = document.getElementById('output__img');
        span.innerHTML = [
          '<img title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />',
        ].join('');
      };
    })(file);
    reader.readAsDataURL(file);
    //setPrevPhoto(file.result);
    //console.log(file.result);

    const label = document.getElementById('input__label');
    label.innerHTML = file.name;

    try {
      await getBase64(file, (result) => {
        setPhoto(result);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="footer">
      <h2>Подтверждение работы</h2>

      <div className="input__data">
        <input type="number" name="quantity" required="required" onChange={handleChangeQuantity} />
        <span>Количество участников</span>
        <i></i>
      </div>

      {props.needPhoto ? (
        <>
          <div className="info__text">
            <h4>Фотографии всех участников работы со стендом лабораторной работы</h4>
          </div>

          <div className="input-file">
            <input
              type="file"
              onChange={handleChangePhoto}
              required="required"
              name="avatar"
              id="upload__input"
              accept="image/*,.png,.jpg,.jpeg"
            />
            <label htmlFor="upload__input">Файл</label>
            <i id="input__label"></i>
          </div>
          <span id="output__img" className=""></span>
        </>
      ) : null}

      <div className="info__text">
        <h4>Предъявите заполненную форму преподавателю.</h4>
      </div>

      <div className="input__data subm">
        <input type="text" name="token" required="required" onChange={handleChangeSecret} />
        <span>Код подтверждения</span>
        <i></i>
      </div>
    </div>
  );
}

export default FooterLab;
