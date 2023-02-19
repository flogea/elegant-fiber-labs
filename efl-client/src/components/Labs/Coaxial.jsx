import React from 'react';
import CableExample from './CableExample';

function Coaxial(props) {
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
            <td>Жила</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="conductor" id="radio1" />
                  <label htmlFor="radio1">Однопроволочные</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="conductor" id="radio2" />
                  <label htmlFor="radio2">Многопроволочные</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="conductor" id="radio3" />
                  <label htmlFor="radio3">Другое</label>
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
                  <input type="radio" name="insulation_cond" id="radio4" />
                  <label htmlFor="radio4">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation_cond" id="radio5" />
                  <label htmlFor="radio5">Пористая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation_cond" id="radio6" />
                  <label htmlFor="radio6">Кордельная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation_cond" id="radio7" />
                  <label htmlFor="radio7">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="insulation_cond" id="radio8" />
                  <label htmlFor="radio8">Другое</label>
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
                  <input type="radio" name="cover" id="radio9" />
                  <label htmlFor="radio9">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cover" id="radio10" />
                  <label htmlFor="radio10">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cover" id="radio11" />
                  <label htmlFor="radio11">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cover" id="radio12" />
                  <label htmlFor="radio12">Другое</label>
                </div>
              </div>
            </td>
            <td>
              <textarea onChange={saveInp} name={`text${props.quantTable}3`} id="" />
            </td>
          </tr>
          <tr>
            <td>Оплетка</td>
            <td>
              <div className="radios">
                <div className="radio__label">
                  <input type="radio" name="braid" id="radio13" />
                  <label htmlFor="radio13">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="braid" id="radio14" />
                  <label htmlFor="radio14">Фольга</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="braid" id="radio15" />
                  <label htmlFor="radio15">Оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="braid" id="radio16" />
                  <label htmlFor="radio16">Фольга + оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="braid" id="radio17" />
                  <label htmlFor="radio17">Другое</label>
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
                  <input type="radio" name="typeof_tw(f)isting" id="radio18" />
                  <label htmlFor="radio18">Парная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_tw(f)isting" id="radio19" />
                  <label htmlFor="radio19">Четверочная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_tw(f)isting" id="radio20" />
                  <label htmlFor="radio20">Без скрутки</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_tw(f)isting" id="radio21" />
                  <label htmlFor="radio21">Другое</label>
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
                  <input type="radio" name="typeof_core" id="radio22" />
                  <label htmlFor="radio22">Пучковый</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_core" id="radio23" />
                  <label htmlFor="radio23">Повивный</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_core" id="radio24" />
                  <label htmlFor="radio24">Другое</label>
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
                  <input type="radio" name="typeof_aggregate" id="radio25" />
                  <label htmlFor="radio25">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_aggregate" id="radio26" />
                  <label htmlFor="radio26">Разделитель пар</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_aggregate" id="radio27" />
                  <label htmlFor="radio27">Заполнитель в виде пластмассовых нитей</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="typeof_aggregate" id="radio28" />
                  <label htmlFor="radio28">Другое</label>
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
                  <input type="radio" name="gidrofobic" id="radio29" />
                  <label htmlFor="radio29">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="gidrofobic" id="radio30" />
                  <label htmlFor="radio30">Другое</label>
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
                  <input type="radio" name="poyas_zonal" id="radio31" />
                  <label htmlFor="radio31">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="poyas_zonal" id="radio32" />
                  <label htmlFor="radio32">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="poyas_zonal" id="radio33" />
                  <label htmlFor="radio33">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="poyas_zonal" id="radio34" />
                  <label htmlFor="radio34">Другое</label>
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
                  <input type="radio" name="global_screen" id="radio35" />
                  <label htmlFor="radio35">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="global_screen" id="radio36" />
                  <label htmlFor="radio36">Фольга</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="global_screen" id="radio37" />
                  <label htmlFor="radio37">Оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="global_screen" id="radio38" />
                  <label htmlFor="radio38">Фольга + оплетка</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="global_screen" id="radio39" />
                  <label htmlFor="radio39">Другое</label>
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
                  <input type="radio" name="core_shell" id="radio40" />
                  <label htmlFor="radio40">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="core_shell" id="radio41" />
                  <label htmlFor="radio41">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="core_shell" id="radio42" />
                  <label htmlFor="radio42">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="core_shell" id="radio43" />
                  <label htmlFor="radio43">Другое</label>
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
                  <input type="radio" name="cpillow" id="radio44" />
                  <label htmlFor="radio44">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cpillow" id="radio45" />
                  <label htmlFor="radio45">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cpillow" id="radio46" />
                  <label htmlFor="radio46">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cpillow" id="radio47" />
                  <label htmlFor="radio47">Другое</label>
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
                  <input type="radio" name="carmor" id="radio48" />
                  <label htmlFor="radio48">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="carmor" id="radio49" />
                  <label htmlFor="radio49">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="carmor" id="radio50" />
                  <label htmlFor="radio50">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="carmor" id="radio51" />
                  <label htmlFor="radio51">Сетчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="carmor" id="radio52" />
                  <label htmlFor="radio52">Другое</label>
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
                  <input type="radio" name="armorcover" id="radio53" />
                  <label htmlFor="radio53">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armorcover" id="radio54" />
                  <label htmlFor="radio54">Сплошной</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="armorcover" id="radio55" />
                  <label htmlFor="radio55">Другое</label>
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
                  <input type="radio" name="external_cover" id="radio56" />
                  <label htmlFor="radio56">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="external_cover" id="radio57" />
                  <label htmlFor="radio57">Сплошная</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="external_cover" id="radio58" />
                  <label htmlFor="radio58">Трубчатая</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="external_cover" id="radio59" />
                  <label htmlFor="radio59">Другое</label>
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
                  <input type="radio" name="cremote" id="radio60" />
                  <label htmlFor="radio60">Отсутствует</label>
                </div>
                <div className="radio__label">
                  <input type="radio" name="cremote" id="radio61" />
                  <label htmlFor="radio61">Другое</label>
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

export default Coaxial;
