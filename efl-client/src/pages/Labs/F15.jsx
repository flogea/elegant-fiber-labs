import React from 'react';
import axios from 'axios';

import '../../styles/Labs.scss';

import F11tab from '../../components/Labs/F11tab';
import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import f15Qr from '../../images/qr/f15.png';
import { Context } from '../../Context';

function F15() {
  const Subject = 'Фотоника';
  const LabName = 'Ф15 РАСПРЕДЕЛЕНИЕ СВЕТА В ОПТИЧЕСКИХ ВОЛОКНАХ';
  const LabLink = 'ъыъ.рф/ЕЫУу';
  const FColName = 'Напряжение, В';
  const SColName = 'Ток, мА';

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
      <HeaderLab Qr={f15Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />

      <div>
        <h2>Выполнение работы (часть 1 - ПК)</h2>
        <div className="main-text">1 Включите источник питания.</div>
        <div className="main-text">
          2 Путем вращения микрометрических подвижек (перемещения и фокусировки) и измерения
          интенсивности источников излучения вращением потенциометров на нижней части лабораторного
          стенда рассмотрите все пять торцов оптических волокон.
        </div>
        <div className="main-text">
          3 Юстировкой выходного торца одного из волокон и микрообъектива добиться на экране
          телевизионного приемника контрастного изображения выходного торца исследуемого волокна.
        </div>
        <div className="main-text">
          4 Для каждого волокна снимите пару скриншотов:
          <ul>
            <li>При максимуме интенсивности;</li>
            <li>
              При интенсивности, когда отсутствует перегрузка фотоприемного устройства (белый свет).
            </li>
          </ul>
        </div>
        <div className="main-text">
          5 Используя о специальное программное обеспечение (ScanLine), cделать измерения диаметров
          сердцевин и оболочек оптических волокон, распределения света по диаметрам оптических
          волокон. В качестве опоры для измерения (установления масштаба) используйте волокно с
          известными параметрами (многомодовое волокно 62,5/125 мкм).
        </div>
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

export default F15;
