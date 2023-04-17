import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Labs.scss';

import F11research from '../../components/Labs/F11research';
import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import { Context } from '../../Context';
import { setPerformers } from '../../redux/slices/PerformerSlice';
import ParticlesBG from '../../components/ParticlesBG';
import preloader from '../../images/Infinity.svg';
import preloaderWhite from '../../images/Infinity-white.svg';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import SendButton from '../../components/Labs/SendButton';

function F11() {
  const lab_name = 'F11';
  const array = [
    1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220, 230, 240, 250, 260, 270, 280, 290, 299,
  ];
  const Subject = 'Фотоника';
  const LabName = 'Ф11 ЭЛЕКТРООПТИЧЕСКАЯ МОДУЛЯЦИЯ';
  const LabLink = 'ъыъ.рф/ыьеа';
  const colNames = ['Напряжение, В', 'Ток, мА'];

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
        .post('/api/labs/f11', formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setIsSended('Отправлено');
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsSended('Ошибка');
    }
  };

  return (
    <>
      <ScrollToTopButton />
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
                <li>Источник питания постоянного тока</li>
                <li>Вольтметр</li>
                <li>Блок питания лазера</li>
              </ul>
              <p>
                2 Вольтметр переведите в режим измерения постоянного тока (U=) с автоматическим
                выбором предела (АВП).
              </p>
              <p>3 Источник питания постоянного тока установите на 1 В.</p>
              <p>
                4 Убедитесь, что луч лазера попадает в апертуру фотоприемника. В противном случае
                отрегулируйте траекторию луча изменением положения зеркал. Настройте поляризацию
                лазера.
              </p>

              <F11research initialArray={array} colNames={colNames} num={1}>
                <h2>Исследование 1</h2>
                <p>
                  5 Удалите из оптического тракта четвертьволновую пластинку (вынуть стойку из
                  гнезда) и входной поляризатор (выдвинуть поляризатор из тракта, пользуясь винтом
                  подвижки, на который закреплена оправка поляризатора).
                </p>
                <p>
                  6 Изменяя напряжение на источнике питания постоянного тока, снимите значения с
                  вольтметра, установив зависимость (1) силы тока на фотоприемнике от напряжения на
                  источнике питания:
                </p>
              </F11research>
              <F11research initialArray={array} colNames={colNames} num={2}>
                <h2>Исследование 2</h2>
                <p>
                  7 Внести в оптический тракт установки четвертьволновую пластинку (поместить в
                  гнездо).
                </p>
                <p>
                  8 Источник питания установите на 1 В. Повторите измерения модуляционной
                  характеристики (2) (см. п. 6)
                </p>
              </F11research>
              <F11research initialArray={array} colNames={colNames} num={3}>
                <h2>Исследование 3</h2>
                <p>
                  9 Ввести в оптический тракт входной поляризатор. Для этого необходимо, вращая
                  ходовой винт подвижки, установить поляризатор таким образом, чтобы луч лазера
                  проходил через центр поляризатора. Поворачивая вращающуюся оправку поляризатора,
                  совместить метку на оправке с меткой 1 на обойме.
                </p>
                <p>
                  10 Источник питания установите на 1 В. Повторите измерения модуляционной
                  характеристики (3) (см. п. 6)
                </p>
              </F11research>
              <F11research initialArray={array} colNames={colNames} num={4}>
                <h2>Исследование 4</h2>
                <p>
                  11 Поворачивая вращающуюся оправку поляризатора, совместить метку на оправке
                  поляроида с меткой 2 на обойме.
                </p>
                <p>
                  12 Источник питания установите на 1 В. Повторите измерения модуляционной
                  характеристики (4) (см. п. 6)
                </p>
              </F11research>
            </div>
          </div>

          <FooterLab needPhoto={true} />
          <SendButton
            isLoading={isLoading}
            isSended={isSended}
            preloader={darkMode ? preloaderWhite : preloader}
            onClick={labHandler}
          />
        </form>
      </div>
    </>
  );
}

export default F11;
