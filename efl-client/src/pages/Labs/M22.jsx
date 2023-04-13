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
import M21AdditionalBlock from '../../components/Labs/M21AdditionalBlock';
import M22AdditionalBlock from '../../components/Labs/M22AdditionalBlock';

function M22() {
  const lab_name = 'M22';
  const Subject = 'Вычислительная техника';
  const LabName = 'М22 РЕГИСТРЫ (RG)';
  const LabLink = 'ъыъ.рф/ЕЪыА';

  const { photo, quantity, secretKey, setDisabledInp, darkMode } = React.useContext(Context);
  const performers = useSelector((state) => state.PerformerSlice);
  const fileName = useSelector((state) => state.fileNameSlice);

  const [id_lab, setIdLab] = React.useState('');
  const [receivedId, setReceivedId] = React.useState('');
  const [currentId, setCurrentId] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);
  const [getDataFromDb, setGetDataFromDB] = React.useState(false);
  const [withBoard, setWithBoard] = React.useState(false);

  const dispatch = useDispatch();
  const formRef = React.useRef();

  React.useEffect(() => {
    setIdLab(new Date().getTime());
    setWithBoard(Boolean(JSON.parse(localStorage.getItem('withBoard'))));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('withBoard', JSON.stringify(withBoard));
  }, [withBoard]);

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
              .get('/api/labs/m22GetFiles/' + currentId + '/' + counter, { responseType: 'blob' })
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
    await axios.get('/api/labs/m22save/' + currentId).then((res) => {
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
            file_1: dataTable.file_1,
            file_2: dataTable.file_2,
            file_3: dataTable.file_3,
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
    formData.append('withBoard', +withBoard);

    console.log(Array.from(formData));

    await axios
      .post('api/labs/m22save', formData, {
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
    formData.append('withBoard', +withBoard);

    console.log(Array.from(formData));
    try {
      await axios
        .post('/api/labs/m22', formData, {
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
        <HeaderLab Subject={Subject} LabName={LabName} />
        <form ref={formRef}>
          <Performers />

          <div className="centeredInRow" style={{ justifyContent: 'center' }}>
            <p>Отладочная плата</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={withBoard}
                onChange={() => {
                  setWithBoard(!withBoard);
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>

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
              <p>
                Регистрами называют последовательностные цифровые устройства, предназначенные для
                хранения или сдвига информации.
              </p>

              <h3>Параллельный регистр (ParRG)</h3>
              <p>Один из наиболее часто применяемых видов регистров – параллельный регистр.</p>
              <p>
                Параллельный регистр – устройство последовательностной логики, предназначенное для
                кратковременного хранения информации.
              </p>
              <p>
                Параллельный регистр образуется путем соединения входов синхронизации, входов сброса
                и установки n D-триггеров. Таким образом, у параллельного регистра:
              </p>
              <ul>
                <li>Вход сброса R</li>
                <li>Вход установки S</li>
                <li>Вход синхронизации clk</li>
                <li>Входная шина данных D[n-1:0]</li>
                <li>Выходная шина данных Q[n-1:0]</li>
              </ul>
              <p>
                Количество D-триггеров, входящих в состав параллельного регистра, составляют
                разрядность параллельного регистра.
              </p>
              <p>Пример схемы параллельного четырехразрядного регистра:</p>

              {/* picture */}
              {/* picture */}
              <p>Временная диаграмма работы параллельного четырехразрядного регистра:</p>
              {/* picture */}

              <h3>Последовательный регистр (ShiftRG)</h3>
              <p>
                Последовательный регистр – устройство последовательностной логики, предназначенное
                для сдвига информации. Последовательный регистр иногда называют сдвиговым регистром.
              </p>
              <p>
                Последовательный регистр образуется путем соединения входов синхронизации, входов
                сброса и установки n D-триггеров, а также последовательным соединением их
                информационных входов и выходов (выход предыдущего со входом следующего). Таким
                образом у последовательного регистра:
              </p>
              <ul>
                <li>Вход сброса R</li>
                <li>Вход установки S</li>
                <li>Вход синхронизации clk</li>
                <li>Вход данных D</li>
                <li>Выход данных Q</li>
              </ul>
              <p>
                Количество D-триггеров, входящих в состав параллельного регистра, составляют
                разрядность параллельного регистра.
              </p>
              <p>Пример схемы последовательного четырехразрядного регистра:</p>

              {/* picture */}
              {/* picture */}

              <p>Временная диаграмма работы последовательного четырехразрядного регистра:</p>
              {/* picture */}

              <h3>Буферный регистр (BUF)</h3>
              <p>
                Буферный регистр – устройство последовательностной логики, предназначенное для
                длительного хранения информации, а также обмена ей.
              </p>
              <p>
                Буферный регистр имеет возможность подключения к общей шине своих входов и выходов
                только на момент обмена информацией.
              </p>
              <p>
                Буферный регистр основан на параллельном регистре. В дополнение к схеме
                параллельного регистра необходимо ввести условие записи информации в регистр, а
                также чтения информации из регистра.
              </p>
              <p>Таким образом, у буферного регистра:</p>
              <ul>
                <li>Вход сброса R</li>
                <li>Вход установки S</li>
                <li>Вход синхронизации clk</li>
                <li>Входная шина данных D[n-1:0]</li>
                <li>Выходная шина данных Q[n-1:0]</li>
                <li>Вход разрешения записи WR</li>
                <li>Вход разрешения чтения RD</li>
              </ul>
              <p>
                Количество D-триггеров, входящих в состав параллельного регистра, составляют
                разрядность буферного регистра.
              </p>
              <p>Пример схемы буферного трехразрядного регистра:</p>

              {/* picture */}
              {/* picture */}
              <p>
                В схеме буферного регистра присутствует элемент, называемый тристабильный буфером:
              </p>
              {/* picture */}

              <p>
                Тристабильный буфер копирует на свой выход значение на входе, при условии активности
                разрешающего сигнала. В противном случае выход устройства будет находиться в
                высокоимпедансном состоянии Z. Таблица функционирования тристабильного буфера:
              </p>

              {/* table */}

              <p>
                Это устройство комбинационной логики. Описать такое устройство можно с помощью
                тернарного оператора:
              </p>

              {/* code */}

              <p>Временная диаграмма работы буферного четырехразрядного регистра:</p>
              {/* picture */}

              <h3>Последовательно-параллельный регистр (ShiftParRG)</h3>
              <p>
                В последовательно-параллельный регистр информация записывается последовательным
                способом, а считывается из него параллельно.
              </p>
              <p>У последовательно-параллельного регистра:</p>
              <ul>
                <li>Вход сброса R</li>
                <li>Вход установки S</li>
                <li>Вход синхронизации clk</li>
                <li>Вход данных D</li>
                <li>Выходная шина данных Q[n-1:0]</li>
                <li>Вход разрешения чтения RD</li>
              </ul>
              <p>Пример схемы последовательно-параллельного четырехразрядного регистра:</p>

              {/* picture */}
              {/* picture */}
              <p>
                Временная диаграмма работы последовательно-параллельного четырехразрядного регистра:
              </p>
              {/* picture */}

              <h3>Параллельно-последовательный регистр (ParShiftRG)</h3>
              <p>
                В параллельно-последовательный регистр информация записывается параллельным
                способом, а считывается из него последовательно.
              </p>
              <p>У параллельно-последовательного регистра:</p>
              <ul>
                <li>Вход сброса R</li>
                <li>Вход установки S</li>
                <li>Вход синхронизации clk</li>
                <li>Входная шина данных D[n-1:0]</li>
                <li>Выход данных Q</li>
                <li>Вход разрешения записи WR</li>
              </ul>
              <p>Пример схемы параллельно-последовательного четырехразрядного регистра:</p>

              {/* picture */}
              {/* picture */}
              <p>
                Временная диаграмма работы параллельно-последовательного четырехразрядного регистра:
              </p>
              {/* picture */}

              <h3>Кольцевой регистр (RingRG)</h3>
              <p>
                Кольцевые регистры предназначены для создания схем распределителей импульсов,
                которые служат для формирования следующих друг за другом импульсных сигналов,
                появляющихся в различных цепях управления узлами и устройствами.
              </p>
              <p>Пример схемы кольцевого четырехразрядного регистра:</p>

              {/* picture */}
              {/* picture */}
              <p>Временная диаграмма работы кольцевого четырехразрядного регистра:</p>
              {/* picture */}

              <h3>Модули с параметрами</h3>
              <p>
                Параметры – специальные конструкции Verilog, позволяющие использовать одни и те же
                модули с разными внутренними значениями. Примером может служить модуль регистра: в
                одном случае он будет использован с разрядностью, например, 4, в другом, например, –
                8.{' '}
              </p>

              <h3>Объявление модулей с параметрами</h3>
              <p>Пример объявления модуля с параметром:</p>

              {/* code */}
              <p>В случае, если параметров несколько, они перечисляются через запятую:</p>
              {/* code */}
              <p>
                В обоих примерах значение, написанное после "=", будет использовано по умолчанию,
                если не указывать иное.
              </p>

              <h3>Использование модулей с параметрами</h3>
              <p>Использовать модуль с параметрами можно как обычный модуль:</p>
              {/* code */}
              <p>
                Однако в этом случае значение параметра будет использовано по умолчанию, то есть то,
                что было обозначено при описании модуля.
              </p>
              <p>
                В случае, когда необходимо подключить модуль, изменяя значения параметра, будет
                использована конструкция:
              </p>
              {/* code */}

              <h3>Конкатенация</h3>
              <p>
                Операция конкатенации является одной из наиболее удобных и мощных операций в языке
                Verilog. Суть ее заключается в слиянии нескольких переменных в единое целое, единую
                переменную, с которой можно производить любые другие операции. Необходимо отметить
                два момента: операция конкатенации обладает наивысшим приоритетом по сравнению с
                любой другой операцией вне символов конкатенации {}, но операции заключенные внутри
                фигурных скобок имеют еще больший приоритет (Операции внутри фигурных скобок это
                недокументированное свойство языка, главное в этом случае, чтобы в результате
                внутренней операции результат получил определенную разрядность). Вторым моментом
                является тот факт, что операция конкатенации недопустима с вещественными числами.
              </p>
              <p>
                Операция может содержать несколько повторяющихся элементов, для сокращения записи
                используется множитель, который указывает сколько раз повторяется данный элемент:
              </p>
              {/* code */}
              <p>эквивалентно</p>
              {/* code */}
              <p>
                Множитель может быть целой, неотрицательной константой или константным выражением.
              </p>
              <p>Также в операции могут использоваться внутренние объединения:</p>
              {/* code */}
              <p>эквивалентно</p>
              {/* code */}
              <p>
                Результат операции слияния может использоваться в любом случае в качестве операндов
                или в качестве вектора (переменной) которой присваивается значение. Это широко
                используется для случаев, когда функция должна вернуть несколько значений.
              </p>
            </Foldable>
          </div>

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Запустите Quartus II 15.0.</p>
              <p>2 Создайте проект Lab_M22.</p>

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>par_rg</span> — параллельный
                регистр
              </h3>
              <p>
                3 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>par_rg.v</span>. Сделайте файл старшим в
                иерархии.
              </p>
              <p>
                4 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>par_rg</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}

              <InputWithPreview num={1} ext="v" />

              <p>5 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>6 Получите и изучите RTL-схему модуля.</p>
              <p>7 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={2} ext="pdf" />

              <p>
                Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>par_rg</span>. В качестве входных данных
                используйте
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>D[]</span> – 0 – 70 нс –
                  последовательность цифр номера студенческого билета, выделяя под одну цифру 10 нс,
                  70 – 240 нс – случайные значения с интервалом 8 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 110–115 нс, 1 на
                  0–5, 10–110, 115–240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span>: 0 на 175–185 нс, 1 на 0 –
                  175, 185 – 240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – Overwrite Clock, период –
                  10 нс, коэффициент заполнения – 50.
                </li>
              </ul>
              <p>
                9 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при этом
                разверните все шины., формат отображения всех шин переведите в шестнадцатеричный.
              </p>

              <InputWithPreview num={3} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>shift_rg</span> —
                последовательный регистр
              </h3>
              <p>
                10 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>shift_rg.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                11 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>shift_rg</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={4} ext="v" />

              <p>12 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>13 Получите и изучите RTL-схему модуля.</p>
              <p>14 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={5} ext="pdf" />

              <p>
                15 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>shift_rg</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>D</span> - случайные значение с
                  интервалом 8 нс,
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 110–115 нс, 1 на
                  0–5, 10–110, 115–240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span>: 0 на 175–185 нс, 1 на 0 –
                  175, 185 – 240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – Overwrite Clock, период –
                  10 нс, коэффициент заполнения – 50.
                </li>
              </ul>
              <p>
                16 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины., формат отображения всех шин переведите в
                шестнадцатеричный.
              </p>

              <InputWithPreview num={6} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>buf_rg</span> — буферный регистр
              </h3>
              <p>
                17 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>buf_rg.v</span>. Сделайте файл старшим в
                иерархии
              </p>
              <p>
                18 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>buf_rg</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={7} ext="v" />

              <p>19 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>20 Получите и изучите RTL-схему модуля.</p>
              <p>21 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={8} ext="pdf" />

              <p>
                22 Произведите функциональную симуляцию модуля bufrg. В качестве входных данных
                используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>D[]</span> – 0 – 70 нс –
                  последовательность цифр номера студенческого билета, выделяя под одну цифру 10 нс,
                  70 – 240 нс – случайные значения с интервалом 8 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 110–115 нс, 1 на
                  0–5, 10–110, 115–240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span>: 0 на 175–185 нс, 1 на 0 –
                  175, 185 – 240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>wr</span>: 1 на 20 – 40 нс, 110 – 160
                  нс, 220 – 230 нс. 0 на остальных участках 0 – 240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>rd</span>: 1 на 5 – 10, 50 – 90, 130 –
                  170, 200 – 210. 0 на остальных участках 0 – 240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – Overwrite Clock, период –
                  10 нс, коэффициент заполнения – 50.
                </li>
              </ul>
              <p>
                23 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины., формат отображения всех шин переведите в
                шестнадцатеричный.
              </p>

              <InputWithPreview num={9} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>shiftpar_rg</span> —
                последовательно-параллельный регистр
              </h3>
              <p>
                24 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>shiftpar_rg.v</span>. Сделайте файл
                старшим в иерархии.
              </p>
              <p>
                Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>shiftpar_rg</span> на Verilog HDL,
                дополнив код:
              </p>

              {/* code */}
              <InputWithPreview num={10} ext="v" />

              <p>26 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>27 Получите и изучите RTL-схему модуля.</p>
              <p>28 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={11} ext="pdf" />

              <p>
                29 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>shiftpar_rg</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>D</span>: 0 – 280 нс –
                  последовательность цифр номера студенческого билета, переведенная в двоичный
                  формат, при этом под каждую цифру 4 интервала (бита) по 10 нс, 280 – 400 нс –
                  случайные значения с интервалом 8 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – Overwrite Clock, период –
                  10 нс, коэффициент заполнения – 50.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 0 – 1, 320 – 325 нс, 1
                  на 1 – 320, 325 – 400 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span>: 0 на 395 – 400 нс, 1 на 0 –
                  395 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>rd</span>: 1 на 270 – 320 нс, 380 –
                  400 нс, 0 на 0 – 270 нс, 320 – 380 нс.
                </li>
              </ul>
              <p>
                30 Сохраните результат симуляции в виде скриншота промежутка от 0 до 400 нс, при
                этом разверните все шины, формат отображения всех шин переведите в
                шестнадцатеричный.
              </p>

              <InputWithPreview num={12} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>parshift_rg</span> —
                параллельно-последовательный регистр
              </h3>
              <p>
                31 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>parshift_rg.v</span>. Сделайте файл
                старшим в иерархии.
              </p>
              <p>
                32 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>parshift_rg</span> на Verilog HDL,
                дополнив код:
              </p>

              {/* code */}
              <InputWithPreview num={13} ext="v" />

              <p>33 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>34 Получите и изучите RTL-схему модуля.</p>
              <p>35 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={14} ext="pdf" />

              <p>
                Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>parshift_rg</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>D[]</span>: 0 – 100, 110 – 320 –
                  случайные значения с интервалом 8 нс. 100 – 110 – две последних цифры номера
                  студенческого билета.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – Overwrite Clock, период –
                  10 нс, коэффициент заполнения – 50.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 29 – 31 нс, 1 на 0 –
                  29, 31 – 320 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span>: 0 на 305 – 310 нс, 1 на 0 –
                  305, 310 – 320 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>wr</span>: 1 на 0 – 50, 110 – 200, 280
                  – 320 нс, 0 на 50 – 110, 200 – 280 нс.
                </li>
              </ul>
              <p>
                37 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при
                этом разверните все шины., формат отображения всех шин переведите в
                шестнадцатеричный.
              </p>

              <InputWithPreview num={15} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>ring_rg</span> — кольцевой
                регистр
              </h3>
              <p>
                38 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>ring_rg.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                39 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>ring_rg</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={16} ext="v" />

              <p>40 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>41 Получите и изучите RTL-схему модуля.</p>
              <p>42 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={17} ext="pdf" />

              <p>
                43 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>ring_rg</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – Overwrite Clock, период –
                  10 нс, коэффициент заполнения – 50.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span>: 0 на 10 – 20 нс, 290 – 310
                  нс, 1 на 0 – 10, 20 – 290, 310 – 400 нс.
                </li>
              </ul>
              <p>
                44 Сохраните результат симуляции в виде скриншота промежутка от 0 до 400 нс, при
                этом разверните все шины., формат отображения всех шин переведите в
                шестнадцатеричный.
              </p>
              <InputWithPreview num={18} ext="png" />

              {withBoard ? <M22AdditionalBlock /> : null}
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

          <FooterLab needPhoto={withBoard ? true : false} />
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

export default M22;
