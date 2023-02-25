import React from 'react';
import CableExample from './CableExample';

function Twisted(props) {
  const saveInp = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  return (
    <div className={`cable__block`}>
      twistwd
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
                    name={`tw_conductors${props.quantTable}`}
                    id={`twis_radio${props.quantTable}1`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}1`}>Однопроволочные</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_conductors${props.quantTable}`}
                    id={`twis_radio${props.quantTable}2`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}2`}>Многопроволочные</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_conductors${props.quantTable}`}
                    id={`twis_radio${props.quantTable}4`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}4`}>Другое</label>
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
                    name={`tw_insulation${props.quantTable}`}
                    id={`twis_radio${props.quantTable}5`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}5`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_insulation${props.quantTable}`}
                    id={`twis_radio${props.quantTable}6`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}6`}>Другое</label>
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
                    name={`tw_shell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}7`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}7`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_shell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}8`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}8`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_shell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}9`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}9`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_shell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}10`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}10`}>Другое</label>
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
                    name={`tw_screen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}11`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}11`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_screen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}12`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}12`}>Фольга</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_screen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}13`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}13`}>Оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_screen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}14`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}14`}>Фольга + оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_screen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}15`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}15`}>Другое</label>
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
                    name={`tw_tw(f)isting${props.quantTable}`}
                    id={`twis_radio${props.quantTable}16`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}16`}>Парная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_tw(f)isting${props.quantTable}`}
                    id={`twis_radio${props.quantTable}17`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}17`}>Четверочная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_tw(f)isting${props.quantTable}`}
                    id={`twis_radio${props.quantTable}18`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}18`}>Другое</label>
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
                    name={`tw_core${props.quantTable}`}
                    id={`twis_radio${props.quantTable}19`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}19`}>Пучковый</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_core${props.quantTable}`}
                    id={`twis_radio${props.quantTable}20`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}20`}>Другое</label>
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
                    name={`tw_aggregate${props.quantTable}`}
                    id={`twis_radio${props.quantTable}21`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}21`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_aggregate${props.quantTable}`}
                    id={`twis_radio${props.quantTable}22`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}22`}>Разделитель пар</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_aggregate${props.quantTable}`}
                    id={`twis_radio${props.quantTable}23`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}23`}>
                    Заполнитель в виде пластмассовых нитей
                  </label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_aggregate${props.quantTable}`}
                    id={`twis_radio${props.quantTable}24`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}24`}>Другое</label>
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
                    name={`tw_gidro${props.quantTable}`}
                    id={`twis_radio${props.quantTable}25`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}25`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_gidro${props.quantTable}`}
                    id={`twis_radio${props.quantTable}26`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}26`}>Другое</label>
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
                    name={`tw_zonal${props.quantTable}`}
                    id={`twis_radio${props.quantTable}27`}
                  />
                  <label htmlFor={`twis_radio27`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_zonal${props.quantTable}`}
                    id={`twis_radio${props.quantTable}28`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}28`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_zonal${props.quantTable}`}
                    id={`twis_radio${props.quantTable}29`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}29`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_zonal${props.quantTable}`}
                    id={`twis_radio${props.quantTable}30`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}30`}>Другое</label>
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
                    name={`tw_gscreen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}31`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}31`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_gscreen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}32`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}32`}>Фольга</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_gscreen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}33`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}33`}>Оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_gscreen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}34`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}34`}>Фольга + оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_gscreen${props.quantTable}`}
                    id={`twis_radio${props.quantTable}35`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}35`}>Другое</label>
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
                    name={`tw_cshell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}36`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}36`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_cshell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}37`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}37`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_cshell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}38`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}38`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_cshell${props.quantTable}`}
                    id={`twis_radio${props.quantTable}39`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}39`}>Другое</label>
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
                    name={`tw_pillow${props.quantTable}`}
                    id={`twis_radio${props.quantTable}40`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}40`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_pillow${props.quantTable}`}
                    id={`twis_radio${props.quantTable}41`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}41`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_pillow${props.quantTable}`}
                    id={`twis_radio${props.quantTable}42`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}42`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_pillow${props.quantTable}`}
                    id={`twis_radio${props.quantTable}43`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}43`}>Другое</label>
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
                    name={`tw_armor${props.quantTable}`}
                    id={`twis_radio${props.quantTable}44`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}44`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_armor${props.quantTable}`}
                    id={`twis_radio${props.quantTable}45`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}45`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_armor${props.quantTable}`}
                    id={`twis_radio${props.quantTable}46`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}46`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_armor${props.quantTable}`}
                    id={`twis_radio${props.quantTable}47`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}47`}>Сетчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_armor${props.quantTable}`}
                    id={`twis_radio${props.quantTable}48`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}48`}>Другое</label>
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
                    name={`tw_armorc${props.quantTable}`}
                    id={`twis_radio${props.quantTable}49`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}49`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_armorc${props.quantTable}`}
                    id={`twis_radio${props.quantTable}50`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}50`}>Сплошной</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_armorc${props.quantTable}`}
                    id={`twis_radio${props.quantTable}51`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}51`}>Другое</label>
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
                    name={`tw_external${props.quantTable}`}
                    id={`twis_radio${props.quantTable}52`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}52`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_external${props.quantTable}`}
                    id={`twis_radio${props.quantTable}53`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}53`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_external${props.quantTable}`}
                    id={`twis_radio${props.quantTable}54`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}54`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_external${props.quantTable}`}
                    id={`twis_radio${props.quantTable}55`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}55`}>Другое</label>
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
                    name={`tw_remote${props.quantTable}`}
                    id={`twis_radio${props.quantTable}56`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}56`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`tw_remote${props.quantTable}`}
                    id={`twis_radio${props.quantTable}57`}
                  />
                  <label htmlFor={`twis_radio${props.quantTable}57`}>Другое</label>
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

export default Twisted;
