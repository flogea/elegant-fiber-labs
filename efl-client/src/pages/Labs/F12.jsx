import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Labs.scss';

import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import FooterLab from '../../components/Labs/FooterLab';
import F12research1 from '../../components/Labs/F12Research1';
import { Context } from '../../Context';
import { setPerformers } from '../../redux/slices/PerformerSlice';
import ParticlesBG from '../../components/ParticlesBG';
import preloader from '../../images/Infinity.svg';
import preloaderWhite from '../../images/Infinity-white.svg';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import SendButton from '../../components/Labs/SendButton';

function F12() {
  const lab_name = 'F12';
  const Subject = 'Фотоника';
  const LabName = 'Ф12 АКУСТООПТИЧЕСКАЯ МОДУЛЯЦИЯ';
  const LabLink = 'ъыъ.рф/АЪыЬ';

  const { quantity, secretKey, setDisabledInp, darkMode } = React.useContext(Context);
  const performers = useSelector((state) => state.PerformerSlice);

  const [id_lab, setIdLab] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);

  const dispatch = useDispatch();
  const formRef = React.useRef();

  React.useEffect(() => {
    setIdLab(new Date().getTime());
  }, []);

  const labHandler = async () => {
    // try {
    //   await axios
    //     .post(
    //       '/api/labs/f12',
    //       {
    //         token: secretKey.token,
    //         table12,
    //         table12_1,
    //         table12_2,
    //         table12_3,
    //         performers: performers.performers,
    //         group: performers.group,
    //         email: performers.email,
    //         lab_name: lab_name,
    //         id_lab: id_lab,
    //         photo,
    //         quantity: quantity.quantity,
    //       },
    //       {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       },
    //     )
    //     .then((res) => console.log(res));
    // } catch (error) {
    //   console.log(error);
    // }
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
                <li>Генератор сигнала высокой частоты</li>
                <li>Вольтметр</li>
                <li>Блок питания лазера</li>
              </ul>
              <p>
                2 Убедитесь, что луч лазера проходит через модулятор и попадает на плоскость
                фотоприемника, отраженный луч попадает на плоскость торца лазера и совмещен с
                отверстием излучателя. В противном случае отрегулируйте траекторию луча изменением
                положения зеркал, модулятора.
              </p>
              <p>
                3 Вольтметр переведите в режим измерения постоянного тока (I=) с автоматическим
                выбором предела (АВП). Измерьте ток, генерируемый нулевым порядком.
              </p>

              {/* input */}

              <p>
                4 Включите генератор сигнала высокой частоты. Генератор сигнала высокой частоты
                настройте на частоту, указанную преподавателем. Ручки управления мощностью сигнала
                (3 шт) установите в крайние правые положения.
              </p>
              <p>5 Измерьте расстояния: </p>
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

export default F12;
