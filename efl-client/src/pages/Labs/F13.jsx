import React from 'react';

import '../../styles/Labs.scss';

import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import F11tab from '../../components/Labs/F11tab';
import f13Qr from '../../images/qr/f13.png';

function F13() {
  const array = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110,
    115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180,
  ];
  const Subject = 'Фотоника';
  const LabName = 'Ф13 ПРОСТРАНСТВЕННЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ';
  const LabLink = 'ъыъ.рф/аъые';
  const FColName = 'α, °';
  const SColName = 'I3 Y, нА';

  return (
    <div className="container">
      <HeaderLab Qr={f13Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />

      <div>
        <h2>Выполнение работы</h2>
        <div className="main-text">
          1 Включите приборы:
          <ul>
            <li>Блок питания источников излучения</li>
            <li>Вольтметр</li>
          </ul>
        </div>
        <div className="main-text">
          2 Вольтметр переведите в режим измерения постоянного тока (U=) в наименьшем диапазоне (1
          мкА).
        </div>
      </div>

      <div>
        <h2>Исследование источника 1</h2>
        <div className="main-text">3 Поверните тумблер на установке в положение 1.</div>
        <div className="main-text">4 Установите фотоприемное устройство в положение 90 °.</div>
        <div className="main-text">
          5 Установите источник излучения напротив фотоприемника, вращая винт подвижки, на которой
          закреплены источники.
        </div>
        <div className="main-text">
          6 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток фотоприемного
          устройства.
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="1" />
      </div>

      <div>
        <h2>Исследование источника 2</h2>
        <div className="main-text">7 Поверните тумблер на установке в положение 1.</div>
        <div className="main-text">8 Установите фотоприемное устройство в положение 90 °.</div>
        <div className="main-text">
          9 Установите источник излучения напротив фотоприемника, вращая винт подвижки, на которой
          закреплены источники.
        </div>
        <div className="main-text">
          10 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток фотоприемного
          устройства.
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="2" />
      </div>

      <div>
        <h2>Исследование источника 3</h2>
        <div className="main-text">11 Поверните тумблер на установке в положение 3.</div>
        <div className="main-text">12 Установите фотоприемное устройство в положение 90 °.</div>
        <div className="main-text">
          13 Установите источник излучения напротив фотоприемника, вращая винт подвижки, на которой
          закреплены источники.
        </div>
        <div className="main-text">
          14 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток фотоприемного
          устройства.
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="3" />
      </div>

      <div>
        <div className="main-text">
          15 Поверните на 90 ° оправку, в которой закреплены фотоприемники.
        </div>
        <div className="main-text">
          16 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток фотоприемного
          устройства.
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="4" />
      </div>

      <FooterLab />
    </div>
  );
}

export default F13;
