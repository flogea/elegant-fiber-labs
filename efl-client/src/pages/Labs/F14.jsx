import React from 'react';
import axios from 'axios';

import '../../styles/Labs.scss';

import F11tab from '../../components/Labs/F11tab';
import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import f14Qr from '../../images/qr/f14.png';
import { Context } from '../../Context';

function F14() {
  const lab_name = 'F14';
  const id_lab = new Date().getTime();
  const Subject = 'Фотоника';
  const LabName = 'Ф14 СПЕКТРАЛЬНЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ';
  const LabLink = 'ъыъ.рф/ЪыеУ';
  const FColName = 'λ<sub>1</sub>, нм';
  const SColName = 'p<sub>1</sub>, дБм';

  const labHandler = async () => {
    try {
      await axios
        .post(
          '/api/labs/f13',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
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
      <HeaderLab Qr={f14Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />

      <div>
        <h2>Выполнение работы</h2>
        <div className="main-text">
          1. Включите приборы:
          <ul>
            <li>Источник излучения</li>
            <li>Измеритель оптического уровня мощности</li>
          </ul>
        </div>
        <div className="main-text">
          2 Научитесь снимать с микрометрического винта монохроматора длину волны.
        </div>
      </div>

      <div>
        <h2>Исследование источника 1</h2>
        <div className="main-text">3 Переключите оптический патчкорд в гнездо 1310.</div>
        <div className="main-text">
          4 Вращая микрометрический винт монохроматора, определите длину волны (она может быть не
          равной 1310 нм) и уровень мощности максимума.
        </div>
        <div className="row">
          <div className="col">
            <label>
              λ<sub>max</sub> 1, нм
            </label>
            <input type="text" className="input-table" />
          </div>
          <div className="col">
            <label>
              p<sub>max</sub> 1, дБм
            </label>
            <input type="text" className="input-table" />
          </div>
        </div>
        <div className="main-text">
          5 Измерьте минимальный уровень мощности, измеряемый измерителем
        </div>
        <div className="row">
          <div className="col">
            <label>
              p<sub>min</sub>, дБм
            </label>
            <input type="text" className="input-table" />
          </div>
        </div>
        <div className="main-text">
          6 Выполните измерения уровня мощности и длины волны вблизи диапазона 1310 нм (минимум -
          максимум - минимум).
        </div>
        <F11tab FColName={FColName} SColName={SColName} research="1" />
      </div>

      <div>
        <h2>Исследование источника 2</h2>
        <div className="main-text">7 Переключите оптический патчкорд в гнездо 1550.</div>
        <div className="main-text">
          8 Вращая микрометрический винт монохроматора, определите длину волны (она может быть не
          равной 1550 нм) и уровень мощности максимума.
        </div>
        <div className="row">
          <div className="col">
            <label>
              λ<sub>max</sub> 2, нм
            </label>
            <input type="text" className="input-table" />
          </div>
          <div className="col">
            <label>
              p<sub>max</sub> 2, дБм
            </label>
            <input type="text" className="input-table" />
          </div>
        </div>
        <div className="main-text">
          9 Выполните измерения уровня мощности и длины волны вблизи диапазона 1550 нм (минимум -
          максимум - минимум).
        </div>
        <F11tab FColName={FColName} SColName={SColName} research="2" />
      </div>

      <div className="footer">
        <FooterLab />
        <div className="row">
          <div className="centering">
            <button
              className="wawes-effect wawes-light btn btn-blue"
              onClick={labHandler}
              id="subm_btn">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F14;
