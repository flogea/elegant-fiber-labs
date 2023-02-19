import React from 'react';
import CableExample from './CableExample';

function Symmetric(props) {
  const saveInp = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  return (
    <div className="cable__block">
      <CableExample />
      <table className="iksweb">
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
            <td style={{ textAlign: 'center' }} colSpan="3">
              Сердечник кабеля
            </td>
          </tr>
          <tr>
            <td>Проводники</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="conductors" id="sym_radio1" />
                  <label htmlFor="sym_radio1">Однопроволочные</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="conductors" id="sym_radio2" />
                  <label htmlFor="sym_radio2">Многопроволочные</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="conductors" id="sym_radio3" />
                  <label htmlFor="sym_radio3">Биметаллические</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="conductors" id="sym_radio4" />
                  <label htmlFor="sym_radio4">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}1`} id="" />
            </td>
          </tr>
          <tr>
            <td>Изоляция проводников</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="insulation" id="sym_radio5" />
                  <label htmlFor="sym_radio5">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation" id="sym_radio6" />
                  <label htmlFor="sym_radio6">Пористая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation" id="sym_radio7" />
                  <label htmlFor="sym_radio7">Кордельная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation" id="sym_radio8" />
                  <label htmlFor="sym_radio8">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation" id="sym_radio9" />
                  <label htmlFor="sym_radio9">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}2`} id="" />
            </td>
          </tr>
          <tr>
            <td>Оболочка / изоляция пар</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="shell" id="sym_radio10" />
                  <label htmlFor="sym_radio10">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="shell" id="sym_radio11" />
                  <label htmlFor="sym_radio11">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="shell" id="sym_radio12" />
                  <label htmlFor="sym_radio12">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="shell" id="sym_radio13" />
                  <label htmlFor="sym_radio13">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}3`} id="" />
            </td>
          </tr>
          <tr>
            <td>Индивидуальный экран</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="screen" id="sym_radio14" />
                  <label htmlFor="sym_radio14">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="screen" id="sym_radio15" />
                  <label htmlFor="sym_radio15">Фольга</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="screen" id="sym_radio16" />
                  <label htmlFor="sym_radio16">Оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="screen" id="sym_radio17" />
                  <label htmlFor="sym_radio17">Фольга + оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="screen" id="sym_radio18" />
                  <label htmlFor="sym_radio18">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}4`} id="" />
            </td>
          </tr>
          <tr>
            <td>Тип скрутки</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="tw(f)isting" id="sym_radio19" />
                  <label htmlFor="sym_radio19">Парная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw(f)isting" id="sym_radio20" />
                  <label htmlFor="sym_radio20">Четверочная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw(f)isting" id="sym_radio21" />
                  <label htmlFor="sym_radio21">Без скрутки</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw(f)isting" id="sym_radio22" />
                  <label htmlFor="sym_radio22">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}5`} id="" />
            </td>
          </tr>
          <tr>
            <td>Тип сердечника</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="core" id="sym_radio23" />
                  <label htmlFor="sym_radio23">Пучковый</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="core" id="sym_radio24" />
                  <label htmlFor="sym_radio24">Повивный</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="core" id="sym_radio25" />
                  <label htmlFor="sym_radio25">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}6`} id="" />
            </td>
          </tr>
          <tr>
            <td>Заполнители / центральные силовые элементы</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="aggregate" id="sym_radio26" />
                  <label htmlFor="sym_radio26">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="aggregate" id="sym_radio27" />
                  <label htmlFor="sym_radio27">Разделитель пар</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="aggregate" id="sym_radio28" />
                  <label htmlFor="sym_radio28">Заполнитель в виде пластмассовых нитей</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="aggregate" id="sym_radio29" />
                  <label htmlFor="sym_radio29">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}7`} id="" />
            </td>
          </tr>
          <tr>
            <td>Гидрофобный заполнитель</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="gidro" id="sym_radio30" />
                  <label htmlFor="sym_radio30">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="gidro" id="sym_radio31" />
                  <label htmlFor="sym_radio31">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}8`} id="" />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan="3">
              Оболочка сердечника
            </td>
          </tr>
          <tr>
            <td>Поясная изоляция</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="zonal" id="sym_radio32" />
                  <label htmlFor="sym_radio32">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="zonal" id="sym_radio33" />
                  <label htmlFor="sym_radio33">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="zonal" id="sym_radio34" />
                  <label htmlFor="sym_radio34">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="zonal" id="sym_radio35" />
                  <label htmlFor="sym_radio35">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}9`} id="" />
            </td>
          </tr>
          <tr>
            <td>Общий экран</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="gscreen" id="sym_radio36" />
                  <label htmlFor="sym_radio36">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="gscreen" id="sym_radio37" />
                  <label htmlFor="sym_radio37">Фольга</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="gscreen" id="sym_radio38" />
                  <label htmlFor="sym_radio38">Оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="gscreen" id="sym_radio39" />
                  <label htmlFor="sym_radio39">Фольга + оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="gscreen" id="sym_radio40" />
                  <label htmlFor="sym_radio40">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}10`} id="" />
            </td>
          </tr>
          <tr>
            <td>Оболочка</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="cshell" id="sym_radio41" />
                  <label htmlFor="sym_radio41">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cshell" id="sym_radio42" />
                  <label htmlFor="sym_radio42">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cshell" id="sym_radio43" />
                  <label htmlFor="sym_radio43">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cshell" id="sym_radio44" />
                  <label htmlFor="sym_radio44">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}11`} id="" />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan="3">
              Защитный покров
            </td>
          </tr>
          <tr>
            <td>Подушка</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="pillow" id="sym_radio45" />
                  <label htmlFor="sym_radio45">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="pillow" id="sym_radio46" />
                  <label htmlFor="sym_radio46">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="pillow" id="sym_radio47" />
                  <label htmlFor="sym_radio47">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="pillow" id="sym_radio48" />
                  <label htmlFor="sym_radio48">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}12`} id="" />
            </td>
          </tr>
          <tr>
            <td>Броня</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="armor" id="sym_radio49" />
                  <label htmlFor="sym_radio49">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armor" id="sym_radio50" />
                  <label htmlFor="sym_radio50">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armor" id="sym_radio51" />
                  <label htmlFor="sym_radio51">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armor" id="sym_radio52" />
                  <label htmlFor="sym_radio52">Сетчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armor" id="sym_radio53" />
                  <label htmlFor="sym_radio53">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}13`} id="" />
            </td>
          </tr>
          <tr>
            <td>Бронепокров</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="armorc" id="sym_radio54" />
                  <label htmlFor="sym_radio54">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armorc" id="sym_radio55" />
                  <label htmlFor="sym_radio55">Сплошной</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armorc" id="sym_radio56" />
                  <label htmlFor="sym_radio56">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}14`} id="" />
            </td>
          </tr>
          <tr>
            <td>Внешняя оболочка</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="external" id="sym_radio57" />
                  <label htmlFor="sym_radio57">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="external" id="sym_radio58" />
                  <label htmlFor="sym_radio58">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="external" id="sym_radio59" />
                  <label htmlFor="sym_radio59">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="external" id="sym_radio60" />
                  <label htmlFor="sym_radio60">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}15`} id="" />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }} colSpan="3">
              Другое
            </td>
          </tr>
          <tr>
            <td>Выносные силовые элементы</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="remote" id="sym_radio61" />
                  <label htmlFor="sym_radio61">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="remote" id="sym_radio62" />
                  <label htmlFor="sym_radio62">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}16`} id="" />
            </td>
          </tr>
          <tr>
            <td>Другое</td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}17`} id="" />
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}18`} id="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Symmetric;
