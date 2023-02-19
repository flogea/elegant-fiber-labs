import React from 'react';

function CableExample(props) {
  const [dataName, setDataName] = React.useState('');

  const saveInp = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  return (
    <>
      <h3>Образец кабеля </h3>
      <div className="input__data">
        <input
          type="text"
          name={`numOfCable${props.quantTable}`}
          className="validate"
          required="required"
          onChange={saveInp}
        />
        <span htmlFor="numOfCable">Номер исследуемого кабеля</span>
        <i></i>
      </div>

      <p>
        Фотография кабеля (горизонтально, разместить четко по центру фотографии) на белом фоне или
        масштабно-координатной бумаге
      </p>
      <div className="input-file">
        <input
          type="file"
          onChange={(e) => {
            setDataName(e.target.files[0]);
            saveInp();
          }}
          name={`photo${props.quantTable}`}
          required="required"
          id={`upload__input__png${props.quantTable}`}
          accept="images/*, .png, .jpg, .jpeg, .heic, .heif"
        />
        <label htmlFor={`upload__input__png${props.quantTable}`}>Файл</label>
      </div>
      <span id={`output__data${props.quantTable}`} className="output__span">
        {dataName.name}
      </span>
    </>
  );
}

export default CableExample;
