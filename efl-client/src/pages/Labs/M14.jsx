import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Labs.scss';

import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import { Context } from '../../Context';
import Foldable from '../../components/Labs/Foldable';
import preloader from '../../images/Infinity.gif';
import ParticlesBG from '../../components/ParticlesBG';

import InputWithPreview from '../../components/Labs/InputWithPreview';
import { setPerformers } from '../../redux/slices/PerformerSlice';
import { setFileName } from '../../redux/slices/fileNameSlice';
import { setFileURL } from '../../redux/slices/fileURLSlice';
import ScrollToTopButton from '../../components/ScrollToTopButton';

import signals1 from '../../images/M14/signals1.png';
import signals2 from '../../images/M14/signals2.png';
import signals3 from '../../images/M14/signals3.png';
import signals4 from '../../images/M14/signals4.png';
import code1 from '../../images/M14/code1.png';
import code2 from '../../images/M14/code2.png';
import code3 from '../../images/M14/code3.png';
import code4 from '../../images/M14/code4.png';
import code5 from '../../images/M14/code5.png';
import code6 from '../../images/M14/code6.png';

function M14() {
  const lab_name = 'M14';
  const Subject = 'Вычислительная техника';
  const LabName = 'М14 КОММУТАЦИОННЫЕ УСТРОЙСТВА (MUX, DMX)';
  const LabLink = 'ъыъ.рф/ЪыуЕ';

  const { photo, quantity, secretKey, setDisabledInp, darkMode } = React.useContext(Context);
  const performers = useSelector((state) => state.PerformerSlice);
  const fileName = useSelector((state) => state.fileNameSlice);

  const [id_lab, setIdLab] = React.useState('');
  const [receivedId, setReceivedId] = React.useState('');
  const [currentId, setCurrentId] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);
  const [getDataFromDb, setGetDataFromDB] = React.useState(false);

  const dispatch = useDispatch();
  const formRef = React.useRef();

  React.useEffect(() => {
    setIdLab(new Date().getTime());
  }, []);

  React.useEffect(() => {
    const dataNameLength = Object.values(fileName).filter(
      (val) => val !== '' && val !== null,
    ).length;

    try {
      let counter = 0;
      for (const obj in fileName) {
        if (Object.hasOwnProperty.call(fileName, obj)) {
          const element = fileName[obj];
          if (element) {
            axios
              .get('/api/labs/m14GetFiles/' + currentId + '/' + counter, { responseType: 'blob' })
              .then((response) => {
                const currentUrl = URL.createObjectURL(response.data).toString();
                dispatch(setFileURL({ [`${obj}URL`]: `${currentUrl}` }));
              });
            counter++;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [getDataFromDb]);

  const findData = async (event) => {
    event.preventDefault();
    await axios.get('/api/labs/m14save/' + currentId).then((res) => {
      const dataSummary = res.data.result[0];
      const dataTable = res.data.result[1];
      console.log(res.data);

      if (dataSummary) {
        dispatch(
          setPerformers({
            performers: dataSummary.performers,
            group: dataSummary.group,
            email: dataSummary.email,
          }),
        );
        setDisabledInp(true);
      }

      if (dataTable) {
        dispatch(
          setFileName({
            file1: dataTable.file1,
            file2: dataTable.file2,
            file3: dataTable.file3,
            file4: dataTable.file4,
            file5: dataTable.file5,
            file6: dataTable.file6,
            file7: dataTable.file7,
            file8: dataTable.file8,
            file9: dataTable.file9,
            file10: dataTable.file10,
            file11: dataTable.file11,
            file12: dataTable.file12,
            file13: dataTable.file13,
            file14: dataTable.file14,
            file15: dataTable.file15,
            file16: dataTable.file16,
            file17: dataTable.file17,
            file18: dataTable.file18,
          }),
        );
        setGetDataFromDB(true);
      }
    });
  };

  const saveHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    formData.append('lab_name', lab_name);
    formData.append('id_lab', id_lab);

    console.log(Array.from(formData));

    await axios
      .post('api/labs/m14save', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        const newId = res.data.id_lab;
        setReceivedId(newId);
        setIsLoading(false);
        setIsSended(true);
        console.log(`Success `, res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsSended('error');
      });
  };

  const labHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    formData.append('lab_name', lab_name);
    formData.append('id_lab', id_lab);

    console.log(Array.from(formData));
    try {
      await axios
        .post('/api/labs/m14', formData, {
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
      <ScrollToTopButton />
      {darkMode ? <ParticlesBG /> : null}
      <div className={darkMode ? 'container dark' : 'container'}>
        <HeaderLab Subject={Subject} LabName={LabName} />
        <form ref={formRef}>
          <Performers />

          <div className="foldable__content">
            <Foldable header="Продолжить работу">
              <div
                className="input__data"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '80%',
                  margin: 'auto',
                }}>
                <input
                  type="text"
                  name="labId"
                  onChange={(e) => {
                    e.preventDefault();
                    setCurrentId(e.target.value);
                  }}
                  placeholder="ID"
                />
                <button onClick={findData} className="generate__btn">
                  Продолжить
                </button>
              </div>
            </Foldable>
            <Foldable header="Теоретические сведения">
              <p>Существует несколько сущностей мультиплексора:</p>
              <ul>
                <li>Мультиплексор в электронике, рассматриваемый в данном курсе;</li>
                <li>
                  Мультиплексор в телекоммуникационных сетях, позволяющий передавать агрегированные
                  потоки информации по одной телекоммуникационной линии;
                </li>
                <li>
                  Мультиплексор в оптике, используемый в системах с разделением по длине волны.
                </li>
              </ul>
              <p>Хоть и суть у них похожа, их не следует путать.</p>

              <h2>Мультиплексор (MUX)</h2>
              <p>
                Мультиплексор — это устройство, коммутирующее на единственный выход тот из входов
                данных, адрес которого указан на адресных входах. Устройство собирает информацию с
                разных входов на одну линию.
              </p>
              <p>
                Исходя из определения мультиплексора, у него существует два типа входов:
                информационные и адресные. Информационные входы отвечают за то, какая информация
                будет скоммутирована, а адресные — за то, с какого из входов. Выход у мультиплексора
                один.
              </p>
              <p>
                Рассмотрим работу мультиплексора на четыре информационных входа. Соответственно,
                адресный вход будет представлять собой двухбитную шину.
              </p>

              <div className="content-image">
                <img src={signals1} alt="signals" name="pic1" />
              </div>

              <div className="content-image">
                <img src={signals2} alt="signals" name="pic2" />
                <label htmlFor="pic2">Мультиплексор 2-в-1</label>
              </div>

              <div className="content-image">
                <img src={signals3} alt="signals" name="pic3" />
                <label htmlFor="pic3">
                  Мультиплексор 8-в-1 и его возможное представление с использованием мультиплексоров
                  2-в-1
                </label>
              </div>

              <h2>Демультиплексор (DMX)</h2>
              <p>
                Демультиплексор выполняет обратную мультиплексору функцию — это устройство,
                коммутирующее информацию с единственного входа данных на тот из выходов, адрес
                которого указан на адресных входах. Устройство распределяет информацию с одной линии
                на разные направления.
              </p>
              <p>
                Информация распределяется с единственного информационного входа на один из выходов,
                при этом на остальных выходах в зависимости от схемотехники микросхемы
                демультиплексора может быть 0, 1 или высокоимпедансное состояние Z (). Предположим,
                что у нас последний случай.
              </p>
              <p>
                Высокоимпедансное состояние, высокоомное состояние, Z-состояние — состояние вывода
                цифровой микросхемы, при котором сопротивление между ее внутренней схемой,
                подключенной к данному выводу, и внешней схемой очень велико. Физически реализуется
                закрытым транзистором, работающим в ключевом режиме.
              </p>
              <p>
                Вывод микросхемы, переведенный в Z-состояние, ведёт себя как не подключенный к ней.
                Внешние устройства, подключенные к этому выводу, могут изменять напряжение на нём по
                своему усмотрению (в некоторых рамках), не влияя на работу микросхемы. И наоборот —
                схема не мешает внешним устройствам менять напряжение на выводе микросхемы.
              </p>
              <p>
                Рассмотрим демультиплексор на 2 адресных входа. Соответственно, у него будет 4
                информационных выхода.
              </p>

              <div className="content-image">
                <img src={signals4} alt="signals" name="pic4" />
              </div>
            </Foldable>
          </div>

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Запустите Quartus II 15.0. Выполните первоначальную настройку.</p>
              <p>2 Создайте проект Lab_M14.</p>

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>mux_2_1</span> — мультиплексор
                2-в-1
              </h3>
              <p>
                3 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  mux_2_1.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                4 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>mux_2_1</span> на Verilog HDL:
              </p>

              {/* code */}
              <div className="content-image">
                <img src={code1} alt="code" name="pic5" />
              </div>

              <InputWithPreview num={1} ext="v" />

              <p>5 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>6 Получите и изучите RTL-схему модуля.</p>
              <p>7 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={2} ext="pdf" />

              <p>
                8 Произведите функциональную симуляцию модуля mux_2_1. В качестве входных данных
                используйте:
              </p>
              <ul>
                <li>x[0] — случайный, с шагом 10 нс;</li>
                <li>x[1] — случайный, с шагом 5 нс;</li>
                <li>addr — случайный, с шагом 20 нс.</li>
              </ul>
              <p>
                9 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при этом
                разверните все шины, формат отображения всех шин переведите в{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>hexadecimal</span>.
              </p>

              <InputWithPreview num={3} ext="png" />

              <h3>Модуль mux_8_1 — мультиплексор 8-в-1</h3>
              <p>
                10 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  mux_8_1.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>11 Опишите проектируемый модуль mux_8_1 на Verilog HDL, дополнив код:</p>

              {/* code */}
              <div className="content-image">
                <img src={code2} alt="code" name="pic6" />
              </div>

              <InputWithPreview num={4} ext="v" />

              <p>12 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>13 Получите и изучите RTL-схему модуля.</p>
              <p>14 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={5} ext="pdf" />

              <p>
                15 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>mux_8_1</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>x[7:0] — случайный, с шагом 10 нс;</li>
                <li>addr[2:0] — случайный, с шагом 40 нс.</li>
              </ul>
              <p>
                16 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при
                этом разверните все шины, формат отображения всех шин переведите в{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>hexadecimal</span>.
              </p>

              <InputWithPreview num={6} ext="png" />

              <h3>Модуль bus_mux_8_1 — шинный мультиплексор 8-в-1</h3>
              <p>
                17 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>bus_mux_8_1.v</span>. Сделайте файл
                старшим в иерархии.
              </p>
              <p>18 Опишите проектируемый модуль bux_mux_8_1 на Verilog HDL, дополнив код:</p>

              {/* code */}
              <div className="content-image">
                <img src={code3} alt="code" name="pic7" />
              </div>

              <InputWithPreview num={7} ext="v" />

              <p>19 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>20 Получите и изучите RTL-схему модуля.</p>
              <p>21 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={8} ext="pdf" />

              <p>
                22 Произведите функциональную симуляцию модуля mux_8_1. В качестве входных данных
                используйте:
              </p>
              <ul>
                <li>x0, x1, x2, x3, x4, x5, x6, x7 — случайный, с шагом 20 нс;</li>
                <li>addr[2:0] — случайный, с шагом 60 нс.</li>
              </ul>
              <p>
                23 Сохраните результат симуляции в виде скриншота промежутка от 0 до 500 нс, при
                этом не разворачивайте шины, формат отображения всех шин переведите в{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>hexadecimal</span>.
              </p>

              <InputWithPreview num={9} ext="png" />

              <h3>Модуль dmx_1_2 — демультиплексор 1-в-2</h3>
              <p>
                24 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  dmx_1_2.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                25 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>dmx_1_2</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <div className="content-image">
                <img src={code4} alt="code" name="pic8" />
              </div>

              <InputWithPreview num={10} ext="v" />

              <p>26 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>27 Получите и изучите RTL-схему модуля.</p>
              <p>28 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={11} ext="pdf" />

              <p>
                29 Произведите функциональную симуляцию модуля dmx_1_2. В качестве входных данных
                используйте:
              </p>
              <ul>
                <li>x — случайный, со случайным шагом;</li>
                <li>addr — случайный, с шагом 20 нс.</li>
              </ul>
              <p>
                30 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при
                этом не разворачивайте шины, формат отображения всех шин переведите в{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>hexadecimal</span>.
              </p>

              <InputWithPreview num={12} ext="png" />

              <h3>Модуль dmx_1_8 — демультиплексор 1-в-8</h3>
              <p>
                31 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>dmx_1_8.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>32 Опишите проектируемый модуль dmx_1_8 на Verilog HDL, дополнив код:</p>

              {/* code */}
              <div className="content-image">
                <img src={code5} alt="code" name="pic9" />
              </div>

              <InputWithPreview num={13} ext="v" />

              <p>33 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>34 Получите и изучите RTL-схему модуля.</p>
              <p>35 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={14} ext="pdf" />

              <p>
                36 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>dmx_1_8</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>x — случайный, со случайным шагом;</li>
                <li>addr[2:0] — случайный, с шагом 20 нс.</li>
              </ul>
              <p>
                37 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при
                этом не разворачивайте шины, формат отображения всех шин переведите в{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>hexadecimal</span>.
              </p>

              <InputWithPreview num={15} ext="png" />

              <h3>Модуль bus_dmx_1_8 — шинный демультиплексор 1-в-8</h3>
              <p>
                38 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  bus_dmx_1_8.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                39 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>bus_dmx_1_8</span> на Verilog HDL,
                дополнив код:
              </p>

              {/* code */}
              <div className="content-image">
                <img src={code6} alt="code" name="pic10" />
              </div>

              <InputWithPreview num={16} ext="v" />

              <p>40 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>41 Получите и изучите RTL-схему модуля.</p>
              <p>42 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={17} ext="pdf" />

              <p>
                43 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>bus_dmx_1_8</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>x[7:0] — случайный, с шагом 20 нс;</li>
                <li>addr[2:0] — случайный, с шагом 55 нс.</li>
              </ul>
              <p>
                44 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при
                этом не разворачивайте шины, формат отображения всех шин переведите в{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>hexadecimal</span>.
              </p>

              <InputWithPreview num={18} ext="png" />
            </div>
          </div>

          <div className="row">
            <div className="centering">
              <button
                type="submit"
                onClick={saveHandler}
                className="generate__btn"
                value={isSended ? (isSended === 'error' ? 'Ошибка' : 'Сохранено') : 'Сохранить'}
                disabled={
                  !(performers.performers && performers.group && performers.email)
                    ? 'disabled'
                    : null
                }>
                <span className="text">
                  {isSended ? (isSended === 'error' ? 'Ошибка' : 'Сохранено') : 'Сохранить'}
                </span>
              </button>
            </div>

            <div>
              {isLoading ? <img src={preloader} className="preloader" /> : null}
              {isSended === true && (
                <>
                  ID (Сохраните, пожалуйста): <b>{receivedId}</b>
                </>
              )}
            </div>
          </div>

          <FooterLab needPhoto={false} />
          <div className="row">
            {isLoading ? <img src={preloader} className="preloader" /> : null}
            <div className="centering">
              <button
                className="send__button"
                onClick={labHandler}
                id="subm_btn"
                // disabled={
                //   !(
                //     dataName.file1 &&
                //     dataName.file2 &&
                //     dataName.file3 &&
                //     dataName.file4 &&
                //     dataName.file5 &&
                //     dataName.file6
                //   )
                //     ? 'disabled'
                //     : null
                // }
              >
                {isSended ? (isSended === 'error' ? 'Ошибка' : 'Отправлено') : 'Отправить'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default M14;
