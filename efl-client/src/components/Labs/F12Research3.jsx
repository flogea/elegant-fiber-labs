import React from 'react';

import F11tab from './F11tab';
import { Context } from '../../Context';
import difr from '../../images/diffraction.png';

function F12Research3() {
  const FColName1 = 'Pсигн, В';
  const SColName1 = 'I1, мкА';
  const array1 = [0.25, 0.5, 0.75, 2, 'Зашкаливает'];

  const FColName2 = 'a, мм';
  const SColName2 = 'I1, мкА';
  const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

  const { table12_3, setTable12_3, table1, table2, table3 } = React.useContext(Context);

  const handleChangeTable12_3 = (event) => {
    setTable12_3({ ...table12_3, [event.target.name]: event.target.value, table1, table2, table3 });
  };

  return (
    <>
      <div>
        <h2>Исследование 3</h2>
        <div className="main-text">
          26 Уточните у преподавателя частоту для третьего исследования. Зафиксируйте частоту работы
          генератора.
        </div>
        <div className="row">
          <div className="col">
            <label>Частота, МГц</label>
            <input type="text" className="input-table" name="1" onChange={handleChangeTable12_3} />
          </div>
        </div>
        <h2>Углы дифракции</h2>
        <div className="main-text">
          27 Измерьте расстояние между порядками дифракции на плоскости фотоприемника по шкале на
          ней, мм:
        </div>

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="input-table upper"
              name="2"
              onChange={handleChangeTable12_3}
            />
            <input
              type="text"
              className="input-table upper"
              name="3"
              onChange={handleChangeTable12_3}
            />
          </div>
          <img src={difr} className="diffraction" />
          <div className="col">
            <input
              type="text"
              className="input-table lower"
              name="4"
              onChange={handleChangeTable12_3}
            />
            <input
              type="text"
              className="input-table lower"
              name="5"
              onChange={handleChangeTable12_3}
            />
          </div>
        </div>
        <div className="main-text">
          28 Снимите зависимость тока (мкА) на всех дифракционных порядках, поочередно устанавливая
          их в апертуру фотоприемника путем регулирования подвижки фотоприемника.
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="input-table upper"
              name="6"
              onChange={handleChangeTable12_3}
            />
            <input
              type="text"
              className="input-table upper"
              name="7"
              onChange={handleChangeTable12_3}
            />
          </div>
          <img src={difr} className="diffraction" />
          <div className="col">
            <input
              type="text"
              className="input-table lower"
              name="8"
              onChange={handleChangeTable12_3}
            />
            <input
              type="text"
              className="input-table lower"
              name="9"
              onChange={handleChangeTable12_3}
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
          29 Установите первый порядок (первый слева от нулевого) в апертуру фотоприемника путем
          регулирования подвижки фотоприемника. Дальнейшие измерение производите с первым
          дифракционным максимумом.
        </div>
        <div className="main-text">
          30 Изменяя мощность сигнала на генераторе путем вращения поворотных ручек в нижней части
          лицевой панели генератора, зафиксируйте зависимость тока на фотоприемнике. Мощность
          следует снимать с индикатора над поворотными ручками.
        </div>
        <F11tab FColName={FColName1} SColName={SColName1} array={array1} research="1" />
      </div>

      <div>
        <h2>
          Зависимость эффективности дифракции в первом порядке от угла падения света на звукопровод
          модулятора
        </h2>
        <div className="main-text">
          31 Ручки управления мощностью сигнала (3 шт) установите в крайние правые положения.
        </div>
        <div className="main-text">
          32 Снимите зависимость силы тока на фотоприемнике от расстояния между отверстием
          излучателя и отраженным лучом (a, мм). Для этого изменяйте угол падения излучения на
          модулятор вращением нижнего винта держателя, на котором он закреплен. При этом на
          плоскости лазера появится отраженный луч. Вращайте ручку таким образом, чтобы отраженный
          луч находился слева от отверстия излучателя.
        </div>
        <F11tab FColName={FColName2} SColName={SColName2} array={array2} research="2" />
        <div className="main-text">33 Зафиксируйте значение a, при котором наибольший I1.</div>
        <div className="row">
          <div className="col">
            <label>a оптимальное, мм</label>
            <input
              type="text"
              className="input-table"
              name="aopt"
              onChange={handleChangeTable12_3}
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Зависимость дифракционной эффективности от мощности при оптимальном угле падения</h2>
        <div className="main-text">
          34 Установите a, равное a оптимальное вращением нижнего винта держателя, на котором он
          закреплен.
        </div>
        <div className="main-text">
          35 Изменяя мощность сигнала на генераторе путем вращения поворотных ручек в нижней части
          лицевой панели генератора, зафиксируйте зависимость тока на фотоприемнике. Мощность
          следует снимать с индикатора над поворотными ручками.
        </div>
        <F11tab FColName={FColName1} SColName={SColName1} array={array1} research="3" />
      </div>
    </>
  );
}

export default F12Research3;
