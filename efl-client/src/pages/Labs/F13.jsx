import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Labs.scss';

import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import { Context } from '../../Context';
import F13research from '../../components/Labs/F11research';
import { setPerformers } from '../../redux/slices/PerformerSlice';
import ParticlesBG from '../../components/ParticlesBG';
import preloader from '../../images/Infinity.gif';

function F13() {
  const lab_name = 'F13';
  const array = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110,
    115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180,
  ];
  const Subject = 'Фотоника';
  const LabName = 'Ф13 ПРОСТРАНСТВЕННЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ';
  const LabLink = 'ъыъ.рф/аъые';
  const colNames = ['α, °', 'I<sub>3</sub> Y, нА'];

  const { quantity, secretKey, setDisabledInp, darkMode } = React.useContext(Context);
  const performers = useSelector((state) => state.PerformerSlice);
  const tables = useSelector((state) => state.ArraySlice);

  const [id_lab, setIdLab] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);

  const dispatch = useDispatch();
  const formRef = React.useRef();

  React.useEffect(() => {
    setIdLab(new Date().getTime());
  }, []);

  const labHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    formData.append('lab_name', lab_name);
    formData.append('id_lab', id_lab);
    formData.append('table1', JSON.stringify(Object.values(tables.table1)));
    formData.append('table2', JSON.stringify(Object.values(tables.table2)));
    formData.append('table3', JSON.stringify(Object.values(tables.table3)));
    formData.append('table4', JSON.stringify(Object.values(tables.table4)));

    console.log(Array.from(formData));
    try {
      await axios
        .post('/api/labs/f13', formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setIsSended(true);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsSended('error');
    }
  };

  return (
    <>
      {darkMode ? <ParticlesBG /> : null}
      <div className={darkMode ? 'container dark' : 'container'}>
        <HeaderLab Subject={Subject} LabName={LabName} LabLink={LabLink} />
        <form ref={formRef}>
          <Performers />

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Включите приборы:</p>
              <ul>
                <li>Блок питания источников излучения</li>
                <li>Вольтметр</li>
              </ul>
              <p>
                2 Вольтметр переведите в режим измерения постоянного тока (U=) в наименьшем
                диапазоне (1 мкА).
              </p>

              <F13research initialArray={array} colNames={colNames} num={1}>
                <h2>Исследование источника 1</h2>
                <p>3 Поверните тумблер на установке в положение 1.</p>
                <p>4 Установите фотоприемное устройство в положение 90 °.</p>
                <p>
                  5 Установите источник излучения напротив фотоприемника, вращая винт подвижки, на
                  которой закреплены источники.
                </p>
                <p>
                  6 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток
                  фотоприемного устройства.
                </p>
              </F13research>
              <F13research initialArray={array} colNames={colNames} num={2}>
                <h2>Исследование источника 2</h2>
                <p>7 Поверните тумблер на установке в положение 1.</p>
                <p>8 Установите фотоприемное устройство в положение 90 °.</p>
                <p>
                  9 Установите источник излучения напротив фотоприемника, вращая винт подвижки, на
                  которой закреплены источники.
                </p>
                <p>
                  10 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток
                  фотоприемного устройства.
                </p>
              </F13research>
              <F13research initialArray={array} colNames={colNames} num={3}>
                <h2>Исследование источника 3</h2>
                <p>11 Поверните тумблер на установке в положение 3.</p>
                <p>12 Установите фотоприемное устройство в положение 90 °.</p>
                <p>
                  13 Установите источник излучения напротив фотоприемника, вращая винт подвижки, на
                  которой закреплены источники.
                </p>
                <p>
                  14 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток
                  фотоприемного устройства.
                </p>
              </F13research>
              <F13research initialArray={array} colNames={colNames} num={4}>
                <p>15 Поверните на 90 ° оправку, в которой закреплены фотоприемники.</p>
                <p>
                  16 Изменяя положения фотоприемного устройства от 0 ° до 180 ° измерьте ток
                  фотоприемного устройства.
                </p>
              </F13research>
            </div>
          </div>

          <FooterLab needPhoto={true} />
          <div className="row">
            {isLoading ? <img src={preloader} className="preloader" /> : null}
            <div className="centering">
              <button className="send__button" onClick={labHandler} id="subm_btn">
                {isSended ? (isSended === 'error' ? 'Ошибка' : 'Отправлено') : 'Отправить'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default F13;
