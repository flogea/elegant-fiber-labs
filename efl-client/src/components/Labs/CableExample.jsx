import React from 'react';

function CableExample(props) {
  const [dataName, setDataName] = React.useState('');
  if (props.n21 === false) {
    return (
      <div className="cable__block">
        <h3>Образец кабеля </h3>
        <div className="input__data">
          <input
            type="number"
            name={`numOfCable${props.quantTable + 1}`}
            className="validate"
            required="required"
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
            onChange={(e) => setDataName(e.target.files[0])}
            name={`photo${props.quantTable + 1}`}
            required="required"
            id={`upload__input__png${props.quantTable + 1}`}
            accept="images/*, .png, .jpg, .jpeg, .heic, .heif"
          />
          <label htmlFor={`upload__input__png${props.quantTable + 1}`}>Файл</label>
        </div>
        <span id={`output__data${props.quantTable + 1}`} className="output__span">
          {dataName.name}
        </span>

        <table className="iksweb">
          <tbody>
            <tr>
              <td>
                <b>Элемент конструкции</b>
              </td>
              <td>
                <b>Описание</b>
              </td>
              <td>
                <b>Размеры (диаметр)</b>
              </td>
            </tr>
            <tr>
              <td class="text-align:center;" colspan="3">
                Сердечник
              </td>
            </tr>
            <tr>
              <td>
                Токопроводящие жилы (материал, конструкция - симметричная или коаксиальная пара)
              </td>
              <td>
                <textarea name={`text${props.quantTable + 1}1`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}1`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Изоляция жил (материал, конструкция)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}2`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}2`} type="number" />
              </td>
            </tr>
            <tr>
              <td>
                Группообразование (способ скрутки жил, вид скрутки жил, количество жил, групп,
                характер образования сердечника)
              </td>
              <td>
                <textarea name={`text${props.quantTable + 1}3`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}3`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Гидрофобный заполнитель (тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}4`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}4`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Центральные силовые элементы (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}5`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}5`} type="number" />
              </td>
            </tr>
            <tr>
              <td colspan="3">Оболочка сердечника</td>
            </tr>
            <tr>
              <td>Поясная изоляция (материал, способ наложения)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}6`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}6`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Электромагнитный экран (материал, способ наложения)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}7`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}7`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Оболочка (тип, материал)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}8`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}8`} type="number" />
              </td>
            </tr>
            <tr>
              <td colspan="3">Защитный покров</td>
            </tr>
            <tr>
              <td>Подушка (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}9`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}9`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Броня (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}10`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}10`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Бронепокров (материал, тип</td>
              <td>
                <textarea name={`text${props.quantTable + 1}11`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}11`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Внешняя оболочка (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}12`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}12`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Выносные силовые элементы (материал, тип)</td>
              <td>
                {/* <input type="text" /> */}
                <textarea name={`text${props.quantTable + 1}13`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}13`} type="number" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="cable__block">
        <h3>Образец кабеля </h3>
        <div className="input__data">
          <input
            type="number"
            name={`numOfCable${props.quantTable + 1}`}
            className="validate"
            required="required"
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
            onChange={(e) => setDataName(e.target.files[0])}
            name={`photo${props.quantTable + 1}`}
            required="required"
            id={`upload__input__png${props.quantTable + 1}`}
            accept="images/*, .png, .jpg, .jpeg, .heic, .heif"
          />
          <label htmlFor={`upload__input__png${props.quantTable + 1}`}>Файл</label>
        </div>
        <span id={`output__data${props.quantTable + 1}`} className="output__span">
          {dataName.name}
        </span>

        <table className="iksweb">
          <tbody>
            <tr>
              <td>
                <b>Элемент конструкции</b>
              </td>
              <td>
                <b>Описание</b>
              </td>
              <td>
                <b>Размеры (диаметр)</b>
              </td>
            </tr>
            <tr>
              <td class="text-align:center;" colspan="3">
                Сердечник
              </td>
            </tr>
            <tr>
              <td>Оптические волокна с первичным покрытием (материал, конструкция)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}1`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}1`} type="number" />
              </td>
            </tr>
            <tr>
              <td>
                Образование сердечника (способ расположения волокон в сердечнике, характер
                образования сердечника)
              </td>
              <td>
                <textarea name={`text${props.quantTable + 1}2`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}2`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Вторичное покрытие (материал, конструкция)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}3`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}3`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Гидрофобный заполнитель (тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}4`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}4`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Центральные силовые элементы (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}5`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}5`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Распределенные силовые элементы (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}6`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}6`} type="number" />
              </td>
            </tr>
            <tr>
              <td colspan="3">Оболочка сердечника</td>
            </tr>
            <tr>
              <td>Поясная изоляция (материал, способ наложения)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}7`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}7`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Оболочка (тип, материал)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}8`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}8`} type="number" />
              </td>
            </tr>
            <tr>
              <td colspan="3">Защитный покров</td>
            </tr>
            <tr>
              <td>Броня (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}9`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}9`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Внешняя оболочка (материал, тип)</td>
              <td>
                <textarea name={`text${props.quantTable + 1}10`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}10`} type="number" />
              </td>
            </tr>
            <tr>
              <td>Выносные силовые элементы (материал, тип)</td>
              <td>
                {/* <input type="text" /> */}
                <textarea name={`text${props.quantTable + 1}11`} id="" />
              </td>
              <td>
                <input name={`num${props.quantTable + 1}11`} type="number" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CableExample;
