import React from 'react';

import F11tab from './F11tab';
import { Context } from '../../Context';
import difr from '../../images/diffraction.png';

function F12Research1() {
  const FColName1 = 'P<sub>сигн</sub>, В';
  const SColName = 'I<sub>1</sub>, мкА';
  const array1 = [0.25, 0.5, 0.75, 2, 'Зашкаливает'];

  const FColName2 = 'a, мм';
  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

  const { table12_1, setTable12_1, table1, table2, table3 } = React.useContext(Context);

  const handleChangeTable12_1 = (event) => {
    setTable12_1({ ...table12_1, [event.target.name]: event.target.value, table1, table2, table3 });
  };

  return (
    <>
      <div>
        <h2>Исследование 1</h2>
        <div className="main-text">6 Зафиксируйте частоту работы генератора</div>
        <div className="row">
          <div className="col">
            <div className="input col s12 m6 l6">
              <input
                type="text"
                name="1"
                className="validate"
                required="required"
                onChange={handleChangeTable12_1}
              />
              <span htmlFor="1">Частота, МГц</span>
              <i></i>
            </div>
          </div>
        </div>
        <h2>Углы дифракции</h2>
        <div className="main-text">
          7 Измерьте расстояние между порядками дифракции на плоскости фотоприемника по шкале на
          ней, мм:
        </div>

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="input-table upper"
              name="2"
              onChange={handleChangeTable12_1}
            />
            <input
              type="text"
              className="input-table upper"
              name="3"
              onChange={handleChangeTable12_1}
            />
          </div>
          <img src={difr} className="diffraction" />
          <div className="col">
            <input
              type="text"
              className="input-table lower"
              name="4"
              onChange={handleChangeTable12_1}
            />
            <input
              type="text"
              className="input-table lower"
              name="5"
              onChange={handleChangeTable12_1}
            />
          </div>
        </div>
        <div className="main-text">
          8 Снимите зависимость тока (мкА) на всех дифракционных порядках, поочередно устанавливая
          их в апертуру фотоприемника путем регулирования подвижки фотоприемника.
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="input-table upper"
              name="6"
              onChange={handleChangeTable12_1}
            />
            <input
              type="text"
              className="input-table upper"
              name="7"
              onChange={handleChangeTable12_1}
            />
          </div>
          <img src={difr} className="diffraction" />
          <div className="col">
            <input
              type="text"
              className="input-table lower"
              name="8"
              onChange={handleChangeTable12_1}
            />
            <input
              type="text"
              className="input-table lower"
              name="9"
              onChange={handleChangeTable12_1}
            />
          </div>
        </div>
      </div>

      <div>
        <h2>
          Зависимость эффективности дифракции в первом порядке дифракционной решетки от мощности
          акустического сигнала
        </h2>
        <div className="main-text">
          9 Установите первый порядок (первый слева от нулевого) в апертуру фотоприемника путем
          регулирования подвижки фотоприемника. Дальнейшие измерение производите с первым
          дифракционным максимумом.
        </div>
        <div className="main-text">
          10 Изменяя мощность сигнала на генераторе путем вращения поворотных ручек в нижней части
          лицевой панели генератора, зафиксируйте зависимость тока на фотоприемнике. Мощность
          следует снимать с индикатора над поворотными ручками. Зашкаливает - крайние правые
          положения ручек.
        </div>
        <F11tab FColName={FColName1} SColName={SColName} array={array1} research="1" />
      </div>

      <div>
        <h2>
          Зависимость эффективности дифракции в первом порядке от угла падения света на звукопровод
          модулятора
        </h2>
        <div className="main-text">
          11 Ручки управления мощностью сигнала (3 шт) установите в крайние правые положения.
        </div>
        <div className="main-text">
          12 Снимите зависимость силы тока на фотоприемнике от расстояния между отверстием
          излучателя и отраженным лучом (a, мм). Для этого изменяйте угол падения излучения на
          модулятор вращением нижнего винта держателя, на котором он закреплен. При этом на
          плоскости лазера появится отраженный луч. Вращайте ручку таким образом, чтобы отраженный
          луч находился слева от отверстия излучателя.
        </div>
        <F11tab FColName={FColName2} SColName={SColName} array={array2} research="2" />
        <div className="main-text">
          13 Зафиксируйте значение a, при котором наибольший I<sub>1</sub>.
        </div>
        <div className="row">
          <div className="col">
            <div className="input col s12 m6 l6">
              <input
                type="text"
                name="aopt"
                className="validate"
                required="required"
                onChange={handleChangeTable12_1}
              />
              <span htmlFor="aopt">
                a<sub>оптимальное</sub>, мм
              </span>
              <i></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Зависимость дифракционной эффективности от мощности при оптимальном угле падения</h2>
        <div className="main-text">
          14 Установите a, равное a<sub>оптимальное</sub> вращением нижнего винта держателя, на
          котором он закреплен.
        </div>
        <div className="main-text">
          15 Изменяя мощность сигнала на генераторе путем вращения поворотных ручек в нижней части
          лицевой панели генератора, зафиксируйте зависимость тока на фотоприемнике. Мощность
          следует снимать с индикатора над поворотными ручками.
        </div>
        <F11tab FColName={FColName1} SColName={SColName} array={array1} research="3" />
      </div>
    </>
  );
}

export default F12Research1;
