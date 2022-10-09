import React from 'react';
import axios from 'axios';
import { v4 } from 'uuid';

import '../../styles/Labs.scss';

import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import FooterLab from '../../components/Labs/FooterLab';
import f12Qr from '../../images/qr/f12.png';
import F12Research1 from '../../components/Labs/F12Research1';
import F12Research2 from '../../components/Labs/F12Research2';
import F12Research3 from '../../components/Labs/F12Research3';
import { Context } from '../../Context';

function F12() {
  const lab_name = 'F12';
  const id_lab = v4().slice(0, 6);
  const Subject = 'Фотоника';
  const LabName = 'Ф12 АКУСТООПТИЧЕСКАЯ МОДУЛЯЦИЯ';
  const LabLink = 'ъыъ.рф/АЪыЬ';

  const {
    performers,
    table12,
    setTable12,
    table12_1,
    table12_2,
    table12_3,
    photo,
    quantity,
    secretKey,
  } = React.useContext(Context);

  const labHandler = async () => {
    try {
      const data = new FormData();
      data.append('photo', photo);
      console.log(data);
      console.log(photo.photo);
      await axios
        .post(
          '/api/labs/f11',
          {
            ...secretKey,
            table12,
            table12_1,
            table12_2,
            table12_3,
            fio: performers.fio,
            performers: performers.performers,
            group: performers.group,
            email: performers.email,
            lab_name: lab_name,
            id_lab: id_lab,
            photo: data,
            quantity: quantity.quantity,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => console.log(res));

      await axios
        .post(
          '/api/labs/testrouter',
          {
            data: photo.data,
          },
          {
            headers: {
              'content-type': 'multipart/form-data',
            },
          },
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="footer">
        <FooterLab />
        <div className="centering"></div>
        <button
          className="wawes-effect wawes-light btn btn-blue"
          onClick={labHandler}
          id="subm_btn">
          Отправить
        </button>
      </div>
    </div>
  );
}

export default F12;
