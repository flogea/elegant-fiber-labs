import React from 'react';
import CableExample from './CableExample';

function Symmetric(props) {
  const saveInp = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  return (
    <div className={`cable__block`}>
      symmetric
      <CableExample quantTable={props.quantTable} />
      <table className={`iksweb`}>
        <tbody>
          <tr>
            <td>
              <b>Элемент кабеля</b>
            </td>
            <td>
              <b>Исполнение</b>
            </td>
            <td>
              <b>Описание, материал, количество, размер (диаметр, мм)</b>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={`3`}>
              Сердечник кабеля
            </td>
          </tr>
          <tr>
            <td>Проводники</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductors${props.quantTable}`}
                    id={`sym_radio${props.quantTable}1`}
                    value={`Однопроволочные`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}1`}>Однопроволочные</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductors${props.quantTable}`}
                    id={`sym_radio${props.quantTable}2`}
                    value={`Многопроволочные`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}2`}>Многопроволочные</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductors${props.quantTable}`}
                    id={`sym_radio${props.quantTable}3`}
                    value={`Биметаллические`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}3`}>Биметаллические</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductors${props.quantTable}`}
                    id={`sym_radio${props.quantTable}4`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}4`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}1`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Изоляция проводников</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation${props.quantTable}`}
                    id={`sym_radio${props.quantTable}5`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}5`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation${props.quantTable}`}
                    id={`sym_radio${props.quantTable}6`}
                    value={`Пористая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}6`}>Пористая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation${props.quantTable}`}
                    id={`sym_radio${props.quantTable}7`}
                    value={`Кордельная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}7`}>Кордельная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation${props.quantTable}`}
                    id={`sym_radio${props.quantTable}8`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}8`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation${props.quantTable}`}
                    id={`sym_radio${props.quantTable}9`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}9`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}2`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Оболочка / изоляция пар</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`shell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}10`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}10`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`shell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}11`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}11`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`shell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}12`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}12`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`shell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}13`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}13`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}3`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Индивидуальный экран</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`screen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}14`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}14`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`screen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}15`}
                    value={`Фольга`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}15`}>Фольга</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`screen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}16`}
                    value={`Оплетка`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}16`}>Оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`screen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}17`}
                    value={`Фольга + оплетка`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}17`}>Фольга + оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`screen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}18`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}18`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}4`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Тип скрутки</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw(f)isting${props.quantTable}`}
                    id={`sym_radio${props.quantTable}19`}
                    value={`Парная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}19`}>Парная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw(f)isting${props.quantTable}`}
                    id={`sym_radio${props.quantTable}20`}
                    value={`Четверочная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}20`}>Четверочная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw(f)istin${props.quantTable}`}
                    id={`sym_radio${props.quantTable}21`}
                    value={`Без скрутки`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}21`}>Без скрутки</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw(f)isting${props.quantTable}`}
                    id={`sym_radio${props.quantTable}22`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}22`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}5`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Тип сердечника</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`core${props.quantTable}`}
                    id={`sym_radio${props.quantTable}23`}
                    value={`Пучковый`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}23`}>Пучковый</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`core${props.quantTable}`}
                    id={`sym_radio${props.quantTable}24`}
                    value={`Повивный`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}24`}>Повивный</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`core${props.quantTable}`}
                    id={`sym_radio${props.quantTable}25`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}25`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}6`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Заполнители / центральные силовые элементы</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`aggregate${props.quantTable}`}
                    id={`sym_radio${props.quantTable}26`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}26`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`aggregate${props.quantTable}`}
                    id={`sym_radio${props.quantTable}27`}
                    value={`Разделитель пар`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}27`}>Разделитель пар</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`aggregate${props.quantTable}`}
                    id={`sym_radio${props.quantTable}28`}
                    value={`Заполнитель в виде пластмассовых нитей`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}28`}>
                    Заполнитель в виде пластмассовых нитей
                  </label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`aggregate${props.quantTable}`}
                    id={`sym_radio${props.quantTable}29`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}29`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}7`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Гидрофобный заполнитель</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gidro${props.quantTable}`}
                    id={`sym_radio${props.quantTable}30`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}30`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gidro${props.quantTable}`}
                    id={`sym_radio${props.quantTable}31`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}31`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}8`} id={``} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={`3`}>
              Оболочка сердечника
            </td>
          </tr>
          <tr>
            <td>Поясная изоляция</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`zonal${props.quantTable}`}
                    id={`sym_radio${props.quantTable}32`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}32`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`zonal${props.quantTable}`}
                    id={`sym_radio${props.quantTable}33`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}33`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`zonal${props.quantTable}`}
                    id={`sym_radio${props.quantTable}34`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}34`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`zonal${props.quantTable}`}
                    id={`sym_radio${props.quantTable}35`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}35`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}9`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Общий экран</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gscreen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}36`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}36`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gscreen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}37`}
                    value={`Фольга`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}37`}>Фольга</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gscreen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}38`}
                    value={`Оплетка`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}38`}>Оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gscreen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}39`}
                    value={`Фольга + оплетка`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}39`}>Фольга + оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gscreen${props.quantTable}`}
                    id={`sym_radio${props.quantTable}40`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}40`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}10`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Оболочка</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cshell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}41`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}41`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cshell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}42`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}42`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cshell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}43`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}43`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cshell${props.quantTable}`}
                    id={`sym_radio${props.quantTable}44`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}44`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}11`} id={``} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={`3`}>
              Защитный покров
            </td>
          </tr>
          <tr>
            <td>Подушка</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`pillow${props.quantTable}`}
                    id={`sym_radio${props.quantTable}45`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}45`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`pillow${props.quantTable}`}
                    id={`sym_radio${props.quantTable}46`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}46`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`pillow${props.quantTable}`}
                    id={`sym_radio${props.quantTable}47`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}47`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`pillow${props.quantTable}`}
                    id={`sym_radio${props.quantTable}48`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}48`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}12`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Броня</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armor${props.quantTable}`}
                    id={`sym_radio${props.quantTable}49`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}49`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armor${props.quantTable}`}
                    id={`sym_radio${props.quantTable}50`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}50`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armor${props.quantTable}`}
                    id={`sym_radio${props.quantTable}51`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}51`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armor${props.quantTable}`}
                    id={`sym_radio${props.quantTable}52`}
                    value={`Сетчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}52`}>Сетчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armor${props.quantTable}`}
                    id={`sym_radio${props.quantTable}53`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}53`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}13`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Бронепокров</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armorc${props.quantTable}`}
                    id={`sym_radio${props.quantTable}54`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}54`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armorc${props.quantTable}`}
                    id={`sym_radio${props.quantTable}55`}
                    value={`Сплошной`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}55`}>Сплошной</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armorc${props.quantTable}`}
                    id={`sym_radio${props.quantTable}56`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}56`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}14`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Внешняя оболочка</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external${props.quantTable}`}
                    id={`sym_radio${props.quantTable}57`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}57`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external${props.quantTable}`}
                    id={`sym_radio${props.quantTable}58`}
                    value={`Сплошная`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}58`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external${props.quantTable}`}
                    id={`sym_radio${props.quantTable}59`}
                    value={`Трубчатая`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}59`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external${props.quantTable}`}
                    id={`sym_radio${props.quantTable}60`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}60`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}15`} id={``} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={`3`}>
              Другое
            </td>
          </tr>
          <tr>
            <td>Выносные силовые элементы</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`remote${props.quantTable}`}
                    id={`sym_radio${props.quantTable}61`}
                    value={`Отсутствует`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}61`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`remote${props.quantTable}`}
                    id={`sym_radio${props.quantTable}62`}
                    value={`Другое`}
                  />
                  <label htmlFor={`sym_radio${props.quantTable}62`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}16`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Другое</td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}17`} id={``} />
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}18`} id={``} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Symmetric;
