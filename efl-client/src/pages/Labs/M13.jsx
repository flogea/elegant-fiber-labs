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

import signals from '../../images/M13/signals.svg';
import signals_white from '../../images/M13/signals_white.svg';
import M13AdditionalBlock from '../../components/Labs/M13AdditionalBlock';
import InputWithPreview from '../../components/Labs/InputWithPreview';
import { setPerformers } from '../../redux/slices/PerformerSlice';
import { setFileName } from '../../redux/slices/fileNameSlice';
import { setArray } from '../../redux/slices/ArraySlice';
import { setFileURL } from '../../redux/slices/fileURLSlice';

function M13() {
  const lab_name = 'M13';
  const Subject = 'Вычислительная техника';
  const LabName = 'М13 КОДОПРЕОБРАЗУЮЩИЕ УСТРОЙСТВА (CD, DC, ADD)';
  const LabLink = 'ъыъ.рф/ЪыуЕ';

  const { photo, quantity, secretKey, setDisabledInp, darkMode } = React.useContext(Context);
  const performers = useSelector((state) => state.PerformerSlice);
  const additionalArray = useSelector((state) => state.ArraySlice.someArray);
  const fileName = useSelector((state) => state.fileNameSlice);

  const [id_lab, setIdLab] = React.useState('');
  const [receivedId, setReceivedId] = React.useState('');
  const [currentId, setCurrentId] = React.useState('');
  const [withBoard, setWithBoard] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);
  const [table1data, setTable1data] = React.useState({
    ranges: [],
    hexNumbers: [],
    manualEnter: false,
  });
  const [table2data, setTable2data] = React.useState({
    ranges: [],
    hexNumbers: [],
    manualEnter: false,
  });
  const [isBtnExist, setisBtnExist] = React.useState(true);
  const [isBtnEnterExist, setisBtnEnterExist] = React.useState(true);
  const [isBtnExist2, setisBtnExist2] = React.useState(true);
  const [isBtnEnterExist2, setisBtnEnterExist2] = React.useState(true);
  const [tableState, setTableState] = React.useState(false);
  const [lastRange1, setLastRange1] = React.useState([]);
  const [lastRange2, setLastRange2] = React.useState([]);
  const [getDataFromDb, setGetDataFromDB] = React.useState(false);

  const dispatch = useDispatch();
  const formRef = React.useRef();

  React.useEffect(() => {
    setLastRange1([
      table1data.hexNumbers[Math.floor(Math.random() * table1data.hexNumbers.length)],
      Math.floor(Math.random() * 6) + 3,
    ]);
  }, [table1data]);

  React.useEffect(() => {
    setLastRange2([
      table2data.hexNumbers[Math.floor(Math.random() * table2data.hexNumbers.length)],
      Math.floor(Math.random() * 6) + 3,
    ]);
  }, [table2data]);

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
              .get('/api/labs/m13GetFiles/' + currentId + '/' + counter, { responseType: 'blob' })
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

  function generateHexNumbers() {
    const hexNumbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 15) + 1;
      const hexNumber = randomNumber.toString(16).toUpperCase();
      hexNumbers.push(hexNumber);
    }
    return hexNumbers;
  }

  function generateRandomRange() {
    const rangeTable = [];
    while (rangeTable.length < 9) {
      let randomNumber = Math.floor(Math.random() * 31) * 5 + 5;
      if (!rangeTable.includes(randomNumber)) {
        rangeTable.push(randomNumber);
      }
    }
    rangeTable.sort(function (a, b) {
      return a - b;
    });
    return rangeTable;
  }

  function Table({ numOfTable }) {
    const array = numOfTable === 1 ? table1data.ranges : table2data.ranges;
    const hexArray = numOfTable === 1 ? table1data.hexNumbers : table2data.hexNumbers;
    const manualEnter = numOfTable === 1 ? table1data.manualEnter : table2data.manualEnter;
    const range = numOfTable === 1 ? lastRange1 : lastRange2;

    return (
      <table className="iksweb">
        <tbody>
          <tr>
            <td>Время, нс</td>
            <td>Адрес (addrhex[3:0])</td>
          </tr>
          <tr>
            <td className="halfCell">
              <input type="text" defaultValue={0} readOnly className="halfInp right" />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[0] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[0] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[0] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[1] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[1] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[1] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[2] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[2] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[2] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[3] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[3] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[3] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[4] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[4] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[4] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[5] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[5] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[5] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[6] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[6] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[6] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[7] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[7] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[7] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input
                type="text"
                defaultValue={array.length ? array[8] : ''}
                readOnly={!manualEnter}
                className="halfInp left"
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[8] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td className="halfCell">
              <input
                type="text"
                defaultValue={array.length ? array[8] : ''}
                readOnly={!manualEnter}
                className="halfInp right"
              />
              {' — '}
              <input type="text" defaultValue={160} readOnly className="halfInp left" />
            </td>
            <td>
              <input
                type="text"
                defaultValue={hexArray.length ? hexArray[9] : ''}
                readOnly={!manualEnter}
              />
            </td>
          </tr>
          <tr>
            <td>160 — 320</td>
            <td>
              Счетчик, начальное значение
              <input
                type="text"
                maxLength={1}
                value={range[0]}
                readOnly={!manualEnter}
                style={{ width: '20px' }}
              />
              , период
              <input
                type="text"
                maxLength={1}
                value={range[1]}
                readOnly={!manualEnter}
                style={{ width: '20px' }}
              />
              нс
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  const findData = async (event) => {
    event.preventDefault();
    await axios.get('/api/labs/m13save/' + currentId).then((res) => {
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
        // setisBtnExist(null);
        // setisBtnEnterExist(null);
      }

      if (dataTable) {
        setisBtnEnterExist(false);
        setisBtnEnterExist2(false);
        setisBtnExist(false);
        setisBtnExist2(false);

        dispatch(setArray({ name: 'someArray', value: dataTable.additionalArray }));
        setTable1data({ ...table1data, ranges: dataTable.range1, hexNumbers: dataTable.hex1 });
        setTable2data({ ...table2data, ranges: dataTable.range2, hexNumbers: dataTable.hex2 });
        setLastRange1(dataTable.lastRange1);
        setLastRange2(dataTable.lastRange2);

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
            file_1: dataTable.file_1,
            file_2: dataTable.file_2,
            file_3: dataTable.file_3,
            file_4: dataTable.file_4,
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

    formData.append('range1', JSON.stringify(table1data.ranges));
    formData.append('hex1', JSON.stringify(table1data.hexNumbers));
    formData.append('range2', JSON.stringify(table2data.ranges));
    formData.append('hex2', JSON.stringify(table2data.hexNumbers));
    formData.append('additionalArray', JSON.stringify(additionalArray));
    formData.append('lastRange1', JSON.stringify(lastRange1));
    formData.append('lastRange2', JSON.stringify(lastRange2));
    formData.append('withBoard', +withBoard);

    console.log(Array.from(formData));

    await axios
      .post('api/labs/m13save', formData, {
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
    formData.append('range1', JSON.stringify(table1data.ranges));
    formData.append('hex1', JSON.stringify(table1data.hexNumbers));
    formData.append('range2', JSON.stringify(table2data.ranges));
    formData.append('hex2', JSON.stringify(table2data.hexNumbers));
    formData.append('additionalArray', JSON.stringify(additionalArray));
    formData.append('lastRange1', JSON.stringify(lastRange1));
    formData.append('lastRange2', JSON.stringify(lastRange2));
    formData.append('withBoard', +withBoard);

    console.log(Array.from(formData));
    try {
      await axios
        .post('/api/labs/m13', formData, {
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
        <i className="centeredInRow">В разработке :)</i>
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
              <h3>Дешифратор (DC)</h3>
              <p>
                Дешифратор является одним из основных элементов вычислительных схем. Его входы
                подключаются к адресной шине обслуживаемого дешифратором блока, а на выходах
                формируются сигналы управления, позволяющие активировать в каждый момент времени
                один из элементов блока. Дешифратор выдает сигнал управления (<i>mng</i>) по
                указанному на адресной шине адресу (<i>addr</i>).
              </p>
              <p>
                Таким образом, дешифратор позволяет в каждый момент времени преобразовывать
                полноразрядный двоичный код на N входах в унитарный двоичный код на M выходах
                (активен только тот выход, адрес которого в данный момент указан на адресных входах
                [в двоичном коде]). Соотношения M = 2
                <sup>
                  <small>N</small>
                </sup>{' '}
                для полного дешифратора и M &lt; 2
                <sup>
                  <small>N</small>
                </sup>{' '}
                для неполного дешифратора.
              </p>

              <div className="content-image">
                <img src={darkMode ? signals_white : signals} alt="signals" name="pic1" />
                {/* <label htmlFor="pic1">Семисегментный индикатор</label> */}
              </div>

              <h3>Шифратор (CD)</h3>
              <p>
                Шифратор — это устройство, определяющее адрес направления (addr), по которому
                поступил запрос (mng). То есть шифратор преобразует унитарный код в полноразрядный
                двоичный (на адресных выходах [в двоичном коде] указывается адрес активного входа).
                В каждый момент времени в таком устройстве активный сигнал может быть только на
                одном входе. В противном случае состояние выходов не определено. Для шифратора с
                количеством входов направлений N и количеством адресных выходов M справедливо
                соотношение M = log
                <sub>
                  <small>2</small>
                </sub>
                N.
              </p>

              <h3>Одноразрядный полный сумматор (ADD1)</h3>
              <p>
                Сумматор — комбинационное цифровое устройство, предназначенное для получения
                арифметической суммы двух чисел, представленных в двоичном коде.
              </p>
              <p>
                Складывая числа в столбик, можно заметить, что значение каждого разряда выполняется
                по одним и тем же правилам:
              </p>
              <ul>
                <li>сложение начинается с младшего разряда;</li>
                <li>
                  первое и второе числа каждого разряда складываются, учитывая то, что «перенесли»
                  из предыдущего разряда;
                </li>
                <li>
                  если результат сложения получился двухразрядный, младшее из полученной суммы
                  записывается в качестве результата, а старшее «переносится» в следующий разряд.
                </li>
              </ul>
              <p>
                На основании этого получим устройство, называемое полным одноразрядным сумматором.
                Данное устройство имеет три входных сигнала (первое число <i>a</i>, второе число{' '}
                <i>b</i> и перенос из предыдущего <i>c</i> — carry) и два выходных сигнала
                (результат сложения <i>s</i> и перенос в следующий разряд <i>co</i>).
              </p>
              <p>Составим таблицу функционирования данного устройства.</p>

              <h3>Многоразрядный сумматор (ADDN)</h3>
              <p>
                Для суммирования многоразрядных чисел применяются многоразрядные сумматоры путем
                объединения входов и выходов переноса. Изобразим схему четырехразрядного сумматора.
              </p>
            </Foldable>
          </div>

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Создайте проект. Путь .../VMT/Lab_13/ название Lab13.</p>

              <h3>Дешифратор (DC)</h3>
              <p>2 Создайте файл типа Verilog HDL File. Сохраните его под именем dc_3_8.v.</p>
              <p>
                3 Разработайте дешифратор 3-в-8 на Verilog. Допишите код, приведенный ниже, обращая
                внимание на разрядность.
              </p>

              <pre
                className="hljs"
                style={{
                  display: 'block',
                  overflowX: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                }}>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  module
                </span>{' '}
                dc_3_8 (<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}input
                </span>{' '}
                addr,
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}output
                </span>{' '}
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  reg
                </span>{' '}
                mng
                <br /> );
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  always
                </span>{' '}
                @(*){' '}
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  case
                </span>
                (addr)
                <br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}3'd0
                </span>
                : mng ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8'b00000001
                </span>
                ;<br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}3'd1
                </span>
                : mng ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8'b00000010
                </span>
                ;<br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}default
                </span>
                : mng = ;<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}endcase
                  <br />
                </span>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  endmodule
                  <br />
                  <br />
                </span>
              </pre>

              <p>
                4 Сделайте файл dc_3_8.v старшим в иерархии файлов. Выполните анализ и синтез
                проекта (Ctrl-K).
              </p>

              <InputWithPreview num="1" ext="v" />

              <p>5 Получите RTL-схему дешифратора в формате pdf.</p>

              <InputWithPreview num="2" ext="pdf" />

              <p>
                6 Произведите функциональную симуляцию. Шаг сетки в симуляторе рекомендуется
                установить 5 нс (Edit/Grid Size…).
              </p>

              {/* TABLE */}
              <div className="centeredInRow">
                {isBtnExist && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setTable1data({
                        ...table1data,
                        ranges: generateRandomRange(),
                        hexNumbers: generateHexNumbers(),
                        manualEnter: false,
                      });
                      setisBtnEnterExist(false);
                      setisBtnExist(false);
                    }}
                    className="generate__btn">
                    Сгенерировать
                  </button>
                )}
                {isBtnEnterExist && (
                  <button
                    className="generate__btn hands"
                    onClick={(e) => {
                      e.preventDefault();
                      setTable1data({ ...table1data, manualEnter: true });
                      setisBtnEnterExist(false);
                      setisBtnExist(false);
                    }}>
                    Ввести вручную
                  </button>
                )}
              </div>
              <div>{<Table numOfTable={1} />}</div>

              <p>
                7 Сохраните результаты работы (скриншот временных диаграмм) от 0 до 320 нс с
                развернутыми шинами и названиями сигналов.
              </p>

              <InputWithPreview num="3" ext="png" />

              <h3>Шифратор (CD)</h3>
              <p>8 Создайте файл типа Verilog HDL File. Сохраните его под именем cd_8_3.v.</p>
              <p>
                9 Разработайте шифратор 8-в-3 на Verilog. Допишите код, приведенный ниже,
                самостоятельно.
              </p>

              <pre
                className="hljs"
                style={{
                  display: 'block',
                  overflowX: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                }}>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  module
                </span>{' '}
                cd_8_3 (<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}input
                </span>{' '}
                [:] mng,
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}output
                </span>{' '}
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  reg
                </span>{' '}
                [:] addr
                <br /> );
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  always
                </span>{' '}
                @(*){' '}
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  case
                </span>
                (mng)
                <br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}8'b00000001
                </span>
                : addr ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  3'b000
                </span>
                ;<br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}8'b00000010
                </span>
                : addr ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  3'b001
                </span>
                ;<br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}default
                </span>
                {'\t\t '}: addr = ;<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}endcase
                  <br />
                </span>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  endmodule
                  <br />
                  <br />
                </span>
              </pre>

              <p>
                10 Сделайте файл dc_3_8.v старшим в иерархии файлов. Выполните анализ и синтез
                проекта (Ctrl-K).
              </p>

              <InputWithPreview num="4" ext="v" />

              <p>11 Получите RTL-схему шифратора в формате pdf.</p>

              <InputWithPreview num="5" ext="pdf" />

              <p>
                12 Произведите функциональную симуляцию. Шаг сетки в симуляторе рекомендуется
                установить 5 нс (Edit/Grid Size…).
              </p>

              {/* table */}
              <div className="centeredInRow">
                {isBtnExist2 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setTable2data({
                        ...table2data,
                        ranges: generateRandomRange(),
                        hexNumbers: generateHexNumbers(),
                        manualEnter: false,
                      });
                      setisBtnEnterExist2(false);
                      setisBtnExist2(false);
                    }}
                    className="generate__btn">
                    Сгенерировать
                  </button>
                )}
                {isBtnEnterExist2 && (
                  <button
                    className="generate__btn hands"
                    onClick={(e) => {
                      e.preventDefault();
                      setTable2data({ ...table2data, manualEnter: true });
                      setisBtnEnterExist2(false);
                      setisBtnExist2(false);
                    }}>
                    Ввести вручную
                  </button>
                )}
              </div>
              <div>{<Table numOfTable={2} />}</div>

              <p>
                13 Сохраните результаты работы (скриншот временных диаграмм) от 0 до 320 нс с
                развернутыми шинами и названиями сигналов.
              </p>

              <InputWithPreview num="6" ext="png" />

              <h3>Одноразрядный полный сумматор (ADD1)</h3>
              <p>14 Создайте файл типа Verilog HDL File. Сохраните его под именем add1.v.</p>
              <p>
                15 Разработайте одноразрядный сумматор согласно схеме на Verilog. Допишите код,
                приведенный ниже.
              </p>

              {/* code */}
              <pre
                className="hljs"
                style={{
                  display: 'block',
                  overflowX: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                }}>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  module
                </span>{' '}
                add1 (<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}input
                </span>{' '}
                a, b, c,
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}output
                </span>{' '}
                s, co
                <br />
                );
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  assign
                </span>{' '}
                s = ;<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  assign
                </span>{' '}
                co = ;<br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  endmodule
                  <br />
                  <br />
                </span>
              </pre>

              <p>
                16 Сделайте файл add1.v старшим в иерархии файлов. Выполните анализ и синтез
                проекта.
              </p>

              <InputWithPreview num="7" ext="v" />

              <p>17 Произведите функциональную симуляцию add1:</p>
              <ul>
                <li>a — счетчик, шаг 40 нс;</li>
                <li>b — счетчик, шаг 20 нс;</li>
                <li>с — счетчик, шаг 80 нс.</li>
              </ul>
              <p>Сохраните результаты работы (скриншот временной диаграммы) от 0 до 160 нс.</p>

              <InputWithPreview num="8" ext="png" />

              <h3>Четырехразрядный сумматор (ADD4)</h3>
              <p>19 Создайте файл типа Verilog HDL File. Сохраните его под именем add4.v.</p>
              <p>
                20 Разработайте одноразрядный сумматор согласно схеме на Verilog. Допишите код,
                приведенный ниже.
              </p>

              {/* code */}
              <pre
                className="hljs"
                style={{
                  display: 'block',
                  overflowX: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                }}>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  module
                </span>{' '}
                add4 (<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}input
                </span>{' '}
                [:] a, b,
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}output
                </span>{' '}
                [:] s,
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  output
                </span>{' '}
                co
                <br />
                );
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  wire
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  3
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] carry;
                <br />
                <br />
                add1 add1_0 (
                <span className="hljs-variable" style={{ color: 'rgb(136, 136, 255)' }}>
                  .a
                </span>
                (a[
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ]),{' '}
                <span className="hljs-variable" style={{ color: 'rgb(136, 136, 255)' }}>
                  .b
                </span>
                (b[
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ]),{' '}
                <span className="hljs-variable" style={{ color: 'rgb(136, 136, 255)' }}>
                  .c
                </span>
                (
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  1'b0
                </span>
                ),{' '}
                <span className="hljs-variable" style={{ color: 'rgb(136, 136, 255)' }}>
                  .co
                </span>
                (carry[
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ]),
                <br />
                <span className="hljs-variable" style={{ color: 'rgb(136, 136, 255)' }}>
                  .s
                </span>
                (s[
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ]));
                <br />
                add1 add1_1 ();
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  endmodule
                  <br />
                  <br />
                </span>
              </pre>

              <p>
                21 Сделайте файл add4.v старшим в иерархии файлов. Выполните анализ и синтез
                проекта.
              </p>

              <InputWithPreview num="9" ext="v" />

              <p>22 Произведите функциональную симуляцию add4:</p>
              <ul>
                <li>a — счетчик, шаг 40 нс;</li>
                <li>b — счетчик, шаг 20 нс;</li>
                <li>с — счетчик, шаг 80 нс.</li>
              </ul>
              <p>
                23 Сохраните результаты работы (скриншот временной диаграммы) от 0 до 160 нс,
                развернув все шины.
              </p>

              <InputWithPreview num="10" ext="png" />

              <h3>Четырехразрядный сумматор с драйвером вывода</h3>
              <p>24 Создайте файл типа Verilog HDL File. Сохраните его под именем wrapper_add.v.</p>
              <p>
                25 Разработайте модуль четырехразрядного сумматора с драйвером вывода (ASCII / 7SEG)
                согласно схеме на Verilog. Допишите код, приведенный ниже.
              </p>
              <p>
                26 Сделайте файл wrapper_add.v старшим в иерархии файлов. Выполните анализ и синтез
                проекта.
              </p>

              <InputWithPreview num="11" ext="v" />

              <p>
                27 Получите RTL-схему сумматора с драйвером вывода в формате pdf, развернув модуль
                add4 и один из модулей add1.
              </p>

              <InputWithPreview num="12" ext="pdf" />

              <p>28 Произведите функциональную симуляцию wrapper_add:</p>
              <ul>
                <li>a[3:0] — случайный, шаг 30 нс;</li>
                <li>b[3:0] — случайный, шаг 40 нс;</li>
              </ul>
              <p>
                29 Сохраните результаты работы (скриншот временной диаграммы) от 0 до 320 нс,
                развернув все шины.
              </p>

              <InputWithPreview num="13" ext="png" />

              {withBoard ? <M13AdditionalBlock /> : null}
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

export default M13;
