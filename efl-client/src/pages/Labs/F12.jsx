import React from 'react';

import '../../styles/Labs.scss';

import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import FooterLab from '../../components/Labs/FooterLab';
import f12Qr from '../../images/qr/f12.png';
import F12Research1 from '../../components/Labs/F12Research1';
import F12Research2 from '../../components/Labs/F12Research2';
import F12Research3 from '../../components/Labs/F12Research3';

function F12() {
  const Subject = 'Фотоника';
  const LabName = 'Ф12 АКУСТООПТИЧЕСКАЯ МОДУЛЯЦИЯ';
  const LabLink = 'ъыъ.рф/АЪыЬ';

  return (
    <div className="container">
      <HeaderLab Qr={f12Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />
      <div>
        <h2>Выполнение работы</h2>
        <div className="main-text">
          1 Включите приборы:
          <ul>
            <li>Генератор сигнала высокой частоты</li>
            <li>Вольтметр</li>
            <li>Блок питания лазера</li>
          </ul>
        </div>
        <div className="main-text">
          2 Убедитесь, что луч лазера проходит через модулятор и попадает на плоскость
          фотоприемника, отраженный луч попадает на плоскость торца лазера и совмещен с отверстием
          излучателя. В противном случае отрегулируйте траекторию луча изменением положения зеркал,
          модулятора.
        </div>
        <div className="main-text">
          3 Вольтметр переведите в режим измерения постоянного тока (U=) с автоматическим выбором
          предела (АВП). Измерьте ток, генерируемый нулевым порядком.
        </div>
        <div className="row">
          <div className="col">
            <label>ток, мкА</label>
            <input type="text" className="input-table" />
          </div>
        </div>

        <div className="main-text">
          4 Генератор сигнала высокой частоты настройте на частоту 25 МГц. Ручки управления
          мощностью сигнала (3 шт) установите в крайние правые положения.
        </div>
        <div className="main-text">5 Измерьте расстояния:</div>
        <div className="row">
          <div className="col">
            <label>Расстояние от плоскости лазера до модулятора, см</label>
            <input type="text" className="input-table" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Расстояние от модулятора до плоскости фотоприемника, см</label>
            <input type="text" className="input-table" />
          </div>
        </div>
      </div>
      <F12Research1 />
      <F12Research2 />
      <F12Research3 />

      <FooterLab />
    </div>
  );
}

export default F12;
