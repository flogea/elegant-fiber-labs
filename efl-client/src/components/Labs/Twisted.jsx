import React from 'react';
import CableExample from './CableExample';

function Twisted(props) {
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
                  <input type="radio" name="tw_conductors" id="twis_radio1" />
                  <label htmlFor="twis_radio1">Однопроволочные</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_conductors" id="twis_radio2" />
                  <label htmlFor="twis_radio2">Многопроволочные</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_conductors" id="twis_radio4" />
                  <label htmlFor="twis_radio4">Другое</label>
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
                  <input type="radio" name="tw_insulation" id="twis_radio5" />
                  <label htmlFor="twis_radio5">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_insulation" id="twis_radio6" />
                  <label htmlFor="twis_radio6">Другое</label>
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
                  <input type="radio" name="tw_shell" id="twis_radio7" />
                  <label htmlFor="twis_radio7">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_shell" id="twis_radio8" />
                  <label htmlFor="twis_radio8">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_shell" id="twis_radio9" />
                  <label htmlFor="twis_radio9">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_shell" id="twis_radio10" />
                  <label htmlFor="twis_radio10">Другое</label>
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
                  <input type="radio" name="tw_screen" id="twis_radio11" />
                  <label htmlFor="twis_radio11">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_screen" id="twis_radio12" />
                  <label htmlFor="twis_radio12">Фольга</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_screen" id="twis_radio13" />
                  <label htmlFor="twis_radio13">Оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_screen" id="twis_radio14" />
                  <label htmlFor="twis_radio14">Фольга + оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_screen" id="twis_radio15" />
                  <label htmlFor="twis_radio15">Другое</label>
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
                  <input type="radio" name="tw_tw(f)isting" id="twis_radio16" />
                  <label htmlFor="twis_radio16">Парная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_tw(f)isting" id="twis_radio17" />
                  <label htmlFor="twis_radio17">Четверочная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_tw(f)isting" id="twis_radio18" />
                  <label htmlFor="twis_radio18">Другое</label>
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
                  <input type="radio" name="tw_core" id="twis_radio19" />
                  <label htmlFor="twis_radio19">Пучковый</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_core" id="twis_radio20" />
                  <label htmlFor="twis_radio20">Другое</label>
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
                  <input type="radio" name="tw_aggregate" id="twis_radio21" />
                  <label htmlFor="twis_radio21">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_aggregate" id="twis_radio22" />
                  <label htmlFor="twis_radio22">Разделитель пар</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_aggregate" id="twis_radio23" />
                  <label htmlFor="twis_radio23">Заполнитель в виде пластмассовых нитей</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_aggregate" id="twis_radio24" />
                  <label htmlFor="twis_radio24">Другое</label>
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
                  <input type="radio" name="tw_gidro" id="twis_radio25" />
                  <label htmlFor="twis_radio25">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_gidro" id="twis_radio26" />
                  <label htmlFor="twis_radio26">Другое</label>
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
                  <input type="radio" name="tw_zonal" id="twis_radio27" />
                  <label htmlFor="twis_radio27">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_zonal" id="twis_radio28" />
                  <label htmlFor="twis_radio28">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_zonal" id="twis_radio29" />
                  <label htmlFor="twis_radio29">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_zonal" id="twis_radio30" />
                  <label htmlFor="twis_radio30">Другое</label>
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
                  <input type="radio" name="tw_gscreen" id="twis_radio31" />
                  <label htmlFor="twis_radio31">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_gscreen" id="twis_radio32" />
                  <label htmlFor="twis_radio32">Фольга</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_gscreen" id="twis_radio33" />
                  <label htmlFor="twis_radio33">Оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_gscreen" id="twis_radio34" />
                  <label htmlFor="twis_radio34">Фольга + оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_gscreen" id="twis_radio35" />
                  <label htmlFor="twis_radio35">Другое</label>
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
                  <input type="radio" name="tw_cshell" id="twis_radio36" />
                  <label htmlFor="twis_radio36">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_cshell" id="twis_radio37" />
                  <label htmlFor="twis_radio37">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_cshell" id="twis_radio38" />
                  <label htmlFor="twis_radio38">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_cshell" id="twis_radio39" />
                  <label htmlFor="twis_radio39">Другое</label>
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
                  <input type="radio" name="tw_pillow" id="twis_radio40" />
                  <label htmlFor="twis_radio40">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_pillow" id="twis_radio41" />
                  <label htmlFor="twis_radio41">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_pillow" id="twis_radio42" />
                  <label htmlFor="twis_radio42">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_pillow" id="twis_radio43" />
                  <label htmlFor="twis_radio43">Другое</label>
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
                  <input type="radio" name="tw_armor" id="twis_radio44" />
                  <label htmlFor="twis_radio44">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_armor" id="twis_radio45" />
                  <label htmlFor="twis_radio45">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_armor" id="twis_radio46" />
                  <label htmlFor="twis_radio46">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_armor" id="twis_radio47" />
                  <label htmlFor="twis_radio47">Сетчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_armor" id="twis_radio48" />
                  <label htmlFor="twis_radio48">Другое</label>
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
                  <input type="radio" name="tw_armorc" id="twis_radio49" />
                  <label htmlFor="twis_radio49">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_armorc" id="twis_radio50" />
                  <label htmlFor="twis_radio50">Сплошной</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_armorc" id="twis_radio51" />
                  <label htmlFor="twis_radio51">Другое</label>
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
                  <input type="radio" name="tw_external" id="twis_radio52" />
                  <label htmlFor="twis_radio52">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_external" id="twis_radio53" />
                  <label htmlFor="twis_radio53">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_external" id="twis_radio54" />
                  <label htmlFor="twis_radio54">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_external" id="twis_radio55" />
                  <label htmlFor="twis_radio55">Другое</label>
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
                  <input type="radio" name="tw_remote" id="twis_radio56" />
                  <label htmlFor="twis_radio56">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="tw_remote" id="twis_radio57" />
                  <label htmlFor="twis_radio57">Другое</label>
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

export default Twisted;
