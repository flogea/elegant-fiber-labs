import React from 'react';
import axios from 'axios';
import { v4 } from 'uuid';

import '../../styles/Labs.scss';

import F11tab from '../../components/Labs/F11tab';
import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import f11Qr from '../../images/qr/f11.png';
import { Context } from '../../Context';

function F11() {
  const lab_name = 'F11';
  const id_lab = v4().slice(0, 6);
  const array = [
    1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220, 230, 240, 250, 260, 270, 280, 290, 299,
  ];
  const Subject = 'Фотоника';
  const LabName = 'Ф11 ЭЛЕКТРООПТИЧЕСКАЯ МОДУЛЯЦИЯ';
  const LabLink = 'ъыъ.рф/ыьеа';
  const FColName = 'Напряжение, В';
  const SColName = 'Ток, мА';

  const { performers, table1, table2, table3, table4, photo, quantity, secretKey } =
    React.useContext(Context);

  const labHandler = async () => {
    try {
      const data = new FormData();
      data.append('token', secretKey.token);
      data.append('table1', JSON.stringify(table1));
      data.append('table2', JSON.stringify(table2));
      data.append('table3', JSON.stringify(table3));
      data.append('table4', JSON.stringify(table4));
      data.append('fio', performers.fio);
      data.append('performers', performers.performers);
      data.append('group', performers.group);
      data.append('email', performers.email);
      data.append('lab_name', lab_name);
      data.append('id_lab', id_lab);
      data.append('quantity', quantity.quantity);
      data.append('avatar', photo);

      await axios
        .post('/api/labs/f11', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <HeaderLab Qr={f11Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />
      <div>
        <h2>Выполнение работы</h2>
        <div className="main-text">
          1 Включите приборы:
          <ul>
            <li>Источник питания постоянного тока</li>
            <li>Вольтметр</li>
            <li>Блок питания лазера</li>
          </ul>
        </div>
        <div className="main-text">
          2 Вольтметр переведите в режим измерения постоянного тока (U=) с автоматическим выбором
          предела (АВП).
        </div>
        <div className="main-text">3 Источник питания постоянного тока установите на 1 В.</div>
        <div className="main-text">
          4 Убедитесь, что луч лазера попадает в апертуру фотоприемника. В противном случае
          отрегулируйте траекторию луча изменением положения зеркал. Настройте поляризацию лазера.
        </div>
      </div>

      <div>
        <h2>Исследование 1</h2>
        <div className="main-text">
          5 Удалите из оптического тракта четвертьволновую пластинку (вынуть стойку из гнезда) и
          входной поляризатор (выдвинуть поляризатор из тракта, пользуясь винтом подвижки, на
          который закреплена оправка поляризатора).
        </div>
        <div className="main-text">
          6 Изменяя напряжение на источнике питания постоянного тока, снимите значения с вольтметра,
          установив зависимость (1) силы тока на фотоприемнике от напряжения на источнике питания:
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="1" />
      </div>

      <div>
        <h2>Исследование 2</h2>
        <div className="main-text">
          7 Внести в оптический тракт установки четвертьволновую пластинку (поместить в гнездо).
        </div>
        <div className="main-text">
          8 Источник питания установите на 1 В. Повторите измерения модуляционной характеристики (2)
          (см. п. 6)
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="2" />
      </div>

      <div>
        <h2>Исследование 3</h2>
        <div className="main-text">
          9 Ввести в оптический тракт входной поляризатор. Для этого необходимо, вращая ходовой винт
          подвижки, установить поляризатор таким образом, чтобы луч лазера проходил через центр
          поляризатора. Поворачивая вращающуюся оправку поляризатора, совместить метку на оправке с
          меткой 1 на обойме.
        </div>
        <div className="main-text">
          10 Источник питания установите на 1 В. Повторите измерения модуляционной характеристики
          (3) (см. п. 6)
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="3" />
      </div>

      <div>
        <h2>Исследование 4</h2>
        <div className="main-text">
          11 Поворачивая вращающуюся оправку поляризатора, совместить метку на оправке поляроида с
          меткой 2 на обойме.
        </div>
        <div className="main-text">
          12 Источник питания установите на 1 В. Повторите измерения модуляционной характеристики
          (4) (см. п. 6)
        </div>
        <F11tab FColName={FColName} SColName={SColName} array={array} research="4" />
      </div>

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

export default F11;
