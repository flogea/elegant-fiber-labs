import React from 'react';
import CableExample from './CableExample';

function Coaxial(props) {
  const saveInp = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  return (
    <div className={`cable__block`}>
      coaxial
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
            <td>Жила</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductor${props.quantTable}`}
                    id={`radio${props.quantTable}1`}
                  />
                  <label htmlFor={`radio${props.quantTable}1`}>Однопроволочные</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductor${props.quantTable}`}
                    id={`radio${props.quantTable}2`}
                  />
                  <label htmlFor={`radio${props.quantTable}2`}>Многопроволочные</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`conductor${props.quantTable}`}
                    id={`radio${props.quantTable}3`}
                  />
                  <label htmlFor={`radio${props.quantTable}3`}>Другое</label>
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
                    name={`insulation_cond${props.quantTable}`}
                    id={`radio${props.quantTable}4`}
                  />
                  <label htmlFor={`radio${props.quantTable}4`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation_cond${props.quantTable}`}
                    id={`radio${props.quantTable}5`}
                  />
                  <label htmlFor={`radio${props.quantTable}5`}>Пористая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation_cond${props.quantTable}`}
                    id={`radio${props.quantTable}6`}
                  />
                  <label htmlFor={`radio${props.quantTable}6`}>Кордельная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation_cond${props.quantTable}`}
                    id={`radio${props.quantTable}7`}
                  />
                  <label htmlFor={`radio${props.quantTable}7`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`insulation_cond${props.quantTable}`}
                    id={`radio${props.quantTable}8`}
                  />
                  <label htmlFor={`radio${props.quantTable}8`}>Другое</label>
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
                    name={`cover${props.quantTable}`}
                    id={`radio${props.quantTable}9`}
                  />
                  <label htmlFor={`radio${props.quantTable}9`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cover${props.quantTable}`}
                    id={`radio${props.quantTable}10`}
                  />
                  <label htmlFor={`radio${props.quantTable}10`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cover${props.quantTable}`}
                    id={`radio${props.quantTable}11`}
                  />
                  <label htmlFor={`radio${props.quantTable}11`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cover${props.quantTable}`}
                    id={`radio${props.quantTable}12`}
                  />
                  <label htmlFor={`radio${props.quantTable}12`}>Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}3`} id={``} />
            </td>
          </tr>
          <tr>
            <td>Оплетка</td>
            <td>
              <div className={`radios`}>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`braid${props.quantTable}`}
                    id={`radio${props.quantTable}13`}
                  />
                  <label htmlFor={`radio${props.quantTable}13`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`braid${props.quantTable}`}
                    id={`radio${props.quantTable}14`}
                  />
                  <label htmlFor={`radio${props.quantTable}14`}>Фольга</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`braid${props.quantTable}`}
                    id={`radio${props.quantTable}15`}
                  />
                  <label htmlFor={`radio${props.quantTable}15`}>Оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`braid${props.quantTable}`}
                    id={`radio${props.quantTable}16`}
                  />
                  <label htmlFor={`radio${props.quantTable}16`}>Фольга + оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`braid${props.quantTable}`}
                    id={`radio${props.quantTable}17`}
                  />
                  <label htmlFor={`radio${props.quantTable}17`}>Другое</label>
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
                    name={`typeof_tw(f)isting${props.quantTable}`}
                    id={`radio${props.quantTable}18`}
                  />
                  <label htmlFor={`radio${props.quantTable}18`}>Парная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_tw(f)isting${props.quantTable}`}
                    id={`radio${props.quantTable}19`}
                  />
                  <label htmlFor={`radio${props.quantTable}19`}>Четверочная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_tw(f)isting${props.quantTable}`}
                    id={`radio${props.quantTable}20`}
                  />
                  <label htmlFor={`radio${props.quantTable}20`}>Без скрутки</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_tw(f)isting${props.quantTable}`}
                    id={`radio${props.quantTable}21`}
                  />
                  <label htmlFor={`radio${props.quantTable}21`}>Другое</label>
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
                    name={`typeof_core${props.quantTable}`}
                    id={`radio${props.quantTable}22`}
                  />
                  <label htmlFor={`radio${props.quantTable}22`}>Пучковый</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_core${props.quantTable}`}
                    id={`radio${props.quantTable}23`}
                  />
                  <label htmlFor={`radio${props.quantTable}23`}>Повивный</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_core${props.quantTable}`}
                    id={`radio${props.quantTable}24`}
                  />
                  <label htmlFor={`radio${props.quantTable}24`}>Другое</label>
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
                    name={`typeof_aggregate${props.quantTable}`}
                    id={`radio${props.quantTable}25`}
                  />
                  <label htmlFor={`radio${props.quantTable}25`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_aggregate${props.quantTable}`}
                    id={`radio${props.quantTable}26`}
                  />
                  <label htmlFor={`radio${props.quantTable}26`}>Разделитель пар</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_aggregate${props.quantTable}`}
                    id={`radio${props.quantTable}27`}
                  />
                  <label htmlFor={`radio${props.quantTable}27`}>
                    Заполнитель в виде пластмассовых нитей
                  </label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`typeof_aggregate${props.quantTable}`}
                    id={`radio${props.quantTable}28`}
                  />
                  <label htmlFor={`radio${props.quantTable}28`}>Другое</label>
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
                    name={`gidrofobic${props.quantTable}`}
                    id={`radio${props.quantTable}29`}
                  />
                  <label htmlFor={`radio${props.quantTable}29`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`gidrofobic${props.quantTable}`}
                    id={`radio${props.quantTable}30`}
                  />
                  <label htmlFor={`radio${props.quantTable}30`}>Другое</label>
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
                    name={`poyas_zonal${props.quantTable}`}
                    id={`radio${props.quantTable}31`}
                  />
                  <label htmlFor={`radio${props.quantTable}31`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`poyas_zonal${props.quantTable}`}
                    id={`radio${props.quantTable}32`}
                  />
                  <label htmlFor={`radio${props.quantTable}32`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`poyas_zonal${props.quantTable}`}
                    id={`radio${props.quantTable}33`}
                  />
                  <label htmlFor={`radio${props.quantTable}33`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`poyas_zonal${props.quantTable}`}
                    id={`radio${props.quantTable}34`}
                  />
                  <label htmlFor={`radio${props.quantTable}34`}>Другое</label>
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
                    name={`global_screen${props.quantTable}`}
                    id={`radio${props.quantTable}35`}
                  />
                  <label htmlFor={`radio${props.quantTable}35`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`global_screen${props.quantTable}`}
                    id={`radio${props.quantTable}36`}
                  />
                  <label htmlFor={`radio${props.quantTable}36`}>Фольга</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`global_screen${props.quantTable}`}
                    id={`radio${props.quantTable}37`}
                  />
                  <label htmlFor={`radio${props.quantTable}37`}>Оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`global_screen${props.quantTable}`}
                    id={`radio${props.quantTable}38`}
                  />
                  <label htmlFor={`radio${props.quantTable}38`}>Фольга + оплетка</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`global_screen${props.quantTable}`}
                    id={`radio${props.quantTable}39`}
                  />
                  <label htmlFor={`radio${props.quantTable}${props.quantTable}39`}>Другое</label>
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
                    name={`core_shell${props.quantTable}`}
                    id={`radio${props.quantTable}40`}
                  />
                  <label htmlFor={`radio${props.quantTable}40`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`core_shell${props.quantTable}`}
                    id={`radio${props.quantTable}41`}
                  />
                  <label htmlFor={`radio${props.quantTable}41`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`core_shell${props.quantTable}`}
                    id={`radio${props.quantTable}42`}
                  />
                  <label htmlFor={`radio${props.quantTable}42`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`core_shell${props.quantTable}`}
                    id={`radio${props.quantTable}43`}
                  />
                  <label htmlFor={`radio${props.quantTable}43`}>Другое</label>
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
                    name={`cpillow${props.quantTable}`}
                    id={`radio${props.quantTable}44`}
                  />
                  <label htmlFor={`radio${props.quantTable}44`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cpillow${props.quantTable}`}
                    id={`radio${props.quantTable}45`}
                  />
                  <label htmlFor={`radio${props.quantTable}45`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cpillow${props.quantTable}`}
                    id={`radio${props.quantTable}46`}
                  />
                  <label htmlFor={`radio${props.quantTable}46`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cpillow${props.quantTable}`}
                    id={`radio${props.quantTable}47`}
                  />
                  <label htmlFor={`radio${props.quantTable}47`}>Другое</label>
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
                    name={`carmor${props.quantTable}`}
                    id={`radio${props.quantTable}48`}
                  />
                  <label htmlFor={`radio${props.quantTable}48`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`carmor${props.quantTable}`}
                    id={`radio${props.quantTable}49`}
                  />
                  <label htmlFor={`radio${props.quantTable}49`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`carmor${props.quantTable}`}
                    id={`radio${props.quantTable}50`}
                  />
                  <label htmlFor={`radio${props.quantTable}50`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`carmor${props.quantTable}`}
                    id={`radio${props.quantTable}51`}
                  />
                  <label htmlFor={`radio${props.quantTable}51`}>Сетчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`carmor${props.quantTable}`}
                    id={`radio${props.quantTable}52`}
                  />
                  <label htmlFor={`radio${props.quantTable}52`}>Другое</label>
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
                    name={`armorcover${props.quantTable}`}
                    id={`radio${props.quantTable}53`}
                  />
                  <label htmlFor={`radio${props.quantTable}53`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armorcover${props.quantTable}`}
                    id={`radio${props.quantTable}54`}
                  />
                  <label htmlFor={`radio${props.quantTable}54`}>Сплошной</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`armorcover${props.quantTable}`}
                    id={`radio${props.quantTable}55`}
                  />
                  <label htmlFor={`radio${props.quantTable}55`}>Другое</label>
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
                    name={`external_cover${props.quantTable}`}
                    id={`radio${props.quantTable}56`}
                  />
                  <label htmlFor={`radio${props.quantTable}56`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external_cover${props.quantTable}`}
                    id={`radio${props.quantTable}57`}
                  />
                  <label htmlFor={`radio${props.quantTable}57`}>Сплошная</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external_cover${props.quantTable}`}
                    id={`radio${props.quantTable}58`}
                  />
                  <label htmlFor={`radio${props.quantTable}58`}>Трубчатая</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`external_cover${props.quantTable}`}
                    id={`radio${props.quantTable}59`}
                  />
                  <label htmlFor={`radio${props.quantTable}59`}>Другое</label>
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
                    name={`cremote${props.quantTable}`}
                    id={`radio${props.quantTable}60`}
                  />
                  <label htmlFor={`radio${props.quantTable}60`}>Отсутствует</label>
                </div>
                <div className={`radio__label`}>
                  <input
                    type={`radio`}
                    name={`cremote${props.quantTable}`}
                    id={`radio${props.quantTable}61`}
                  />
                  <label htmlFor={`radio${props.quantTable}61`}>Другое</label>
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

export default Coaxial;
