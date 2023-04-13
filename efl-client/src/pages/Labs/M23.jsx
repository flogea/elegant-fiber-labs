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
import M23AdditionalBlock from '../../components/Labs/M23AdditionalBlock';

import pic1 from '../../images/M23/pic1.png';
import pic2 from '../../images/M23/pic2.png';
import pic3 from '../../images/M23/pic3.png';
import pic4 from '../../images/M23/pic4.png';
import pic5 from '../../images/M23/pic5.png';
import pic6 from '../../images/M23/pic6.png';
import pic7 from '../../images/M23/pic7.png';
import PicAndLabel from '../../components/Labs/PicAndLabel';

function M23() {
  const lab_name = 'M23';
  const Subject = 'Вычислительная техника';
  const LabName = 'М23 СЧЕТЧИКИ (CNT)';
  const LabLink = 'ъыъ.рф/ыЫеЬ';

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
              .get('/api/labs/m23GetFiles/' + currentId + '/' + counter, { responseType: 'blob' })
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
    await axios.get('/api/labs/23save/' + currentId).then((res) => {
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
            file_1: dataTable.file_1,
            file_2: dataTable.file_2,
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
      .post('api/labs/m23save', formData, {
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
        .post('/api/labs/m23', formData, {
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
                Счетчиками называют последовательностные цифровые устройства, предназначенные для
                подсчета поступивших на вход их синхронизации синхроимпульсов.
              </p>
              <p>
                Счетчики – конечные автоматы, каждое последующее состояние которых на 1 отличается
                от предыдущего, подсчитывают количество поступающих на них синхроимпульсов. Кроме
                того, счетчики могут использоваться для деления частоты входного сигнала
                синхронизации.
              </p>
              <p>
                Нередко в счетчиках может быть предусмотрена "установка" значений – сигналы со
                входной шины D записываются в счетчик. При этом в счетчике предусматривается вход
                load, при активном значении на котором по сигналу синхронизации информация
                записывается в счетчик.
              </p>

              <h3>Классификация счетчиков</h3>
              <p>По элементной базе:</p>
              <ul>
                <li>На T-триггерах;</li>
                <li>На D-триггерах;</li>
                <li>На JK-триггерах.</li>
              </ul>
              <p>По порядку счета:</p>
              <ul>
                <li>Суммирующие (инкрементирующие);</li>
                <li>Вычитающие (декрементирующие);</li>
                <li>Реверсивные (сочетающие возможности двух предыдущих типов).</li>
              </ul>
              <p>По способу подачи синхроимпульса:</p>
              <ul>
                <li>Асинхронные (синхросигнал подается не на все триггеры);</li>
                <li>Синхронные (синхросигнал подается на все триггеры одновременно).</li>
              </ul>
              <p>По количеству состояний в цикле счета</p>
              <ul>
                <li>
                  Двоичные (количество состояний равно 2{' '}
                  <sup>
                    <small>N</small>
                  </sup>
                  );
                </li>
                <li>
                  Недвоичные (количество состояний не равно 2{' '}
                  <sup>
                    <small>N</small>
                  </sup>
                  ).
                </li>
              </ul>

              <h3>Суммирующие, вычитающие и реверсивные счетчики</h3>
              <p>
                Изобразим состояния в виде таблицы на примере трехразрядного счетчика. Такой счетчик
                будет иметь в своем составе три разрядных триггера.
              </p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>Суммирующий</td>
                    <td>Вычитающий</td>
                  </tr>
                  <tr>
                    <td>Каждый такт к текущему значению прибавляется значение инкремента</td>
                    <td>Каждый такт от текущего значения вычитается значение декремента</td>
                  </tr>
                  <tr>
                    <td>000</td>
                    <td>111</td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>010</td>
                    <td>101</td>
                  </tr>
                  <tr>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>001</td>
                  </tr>
                  <tr>
                    <td>000</td>
                    <td>000</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Реверсивный счетчик может работать как суммирующий или вычитающий, для управления
                режимами работы счетчика служит сигнал rev. Если сигнал rev = 0, то счетчик работает
                как суммирующий, если rev = 1, то как вычитающий.
              </p>
              <p>Временная диаграмма работы суммирующего трехразрядного счетчика:</p>

              {/* pic */}
              <PicAndLabel num={1} image={pic1} label={null} />

              <p>Временная диаграмма работы вычитающего трехразрядного счетчика:</p>
              {/* pic */}
              <PicAndLabel num={2} image={pic2} label={null} />

              <p>Временная диаграмма работы реверсивного трехразрядного счетчика:</p>
              {/* pic */}
              <PicAndLabel num={3} image={pic3} label={null} />

              <h3>Асинхронные и синхронные счетчики</h3>
              <p>
                Синхронные счетчики отличаются от асинхронных тем, что синхросигнал приходит на все
                разрядные триггеры, а в асинхронных только на один триггер (младшего нулевого
                разряда).
              </p>
              <p>
                Реализовать асинхронные счетчики проще всего на последовательном соединении
                T-триггеров.{' '}
              </p>
              <p>
                Нетрудно убедиться в том, что асинхронные счетчики имеют большую задержку установки
                состояния, так как задержка счетчика накапливается из задержек триггеров. По этой
                причине используются, в основном, синхронные счетчики.{' '}
              </p>
              <p>
                {' '}
                В синхронных счетчиках порядок счета устанавливается связями между выходами
                триггеров и их информационными входами. В таких счетчиках переключающиеся разряды
                переходят в новое состояние одновременно (синхронно). При этом сигнал синхронизации
                поступает параллельно на все триггеры.
              </p>

              <h3>Недвоичные счетчики</h3>
              <p>
                Такие счетчики имеют неполный цикл счета, причем переход в начальное состояние может
                совершаться по воздействию на установочные входы (асинхронная установка) или во
                время подачи импульса синхронизации (синхронная установка).
              </p>
              <p>Такой тип счетчика проще всего синтезировать как конечный автомат.</p>

              <h3>Пример синтеза счетчика со значениями 2, 3, 4, 5, 6 на JK-триггерах</h3>
              {/* pic */}
              <PicAndLabel num={4} image={pic4} label={null} />

              <p>
                Необходимо составить таблицу, показывающую текущее и последующее значения счетчика.
                Видно, что все значения синтезируемого счетчика укладываются в три разряда. Значит,
                что для синтеза понадобится три JK-триггера.
              </p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td colspan="4">Текущее состояние</td>
                    <td colspan="4">Следующее состояние</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>Q[2]</td>
                    <td>Q[1]</td>
                    <td>Q[0]</td>
                    <td>NQ[2]</td>
                    <td>NQ[1]</td>
                    <td>NQ[0]</td>
                    <td>#</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Поскольку счетчик строится на JK-триггерах, необходимо рассмотреть, что нужно
                подавать на входы J и K каждого из трех триггеров. Для рассмотрения воспользуемся
                информацией о JK-триггерах и некоторыми принципами:
              </p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>J</td>
                    <td>K</td>
                    <td>Q</td>
                    <td>!Q</td>
                    <td>Событие</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>Q</td>
                    <td>!Q</td>
                    <td>Хранение</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>Запись “0”</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>Запись “1”</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>!Q</td>
                    <td>Q</td>
                    <td>Переключение</td>
                  </tr>
                </tbody>
              </table>

              <ul>
                <li>
                  Если в JK-триггер был записан 0, то для записи 0 необходимы события:
                  <ul>
                    <li>Хранение</li>
                    <li>Запись “0”</li>
                  </ul>
                </li>
                <li>
                  Если в JK-триггер была записана 1, то для записи 0 необходимы события:
                  <ul>
                    <li>Переключение</li>
                    <li>Запись “0”</li>
                  </ul>
                </li>
                <li>
                  Если в JK-триггер был записан 0, то для записи 1 необходимы события:
                  <ul>
                    <li>Переключение</li>
                    <li>Запись “1”</li>
                  </ul>
                </li>
                <li>
                  Если в JK-триггер была записана 1, то для записи 1 необходимы события:
                  <ul>
                    <li>Хранение</li>
                    <li>Запись “1”</li>
                  </ul>
                </li>
              </ul>

              <p>Опишем данные принципы в виде таблицы:</p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>Q (текущее)</td>
                    <td>J</td>
                    <td>K</td>
                    <td>NQ (следующее)</td>
                    <td>Событие</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>Хранение</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>Запись “0”</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>Переключение</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>Запись “0”</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>Переключение</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>Запись “1”</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>Хранение</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>Запись “1”</td>
                  </tr>
                </tbody>
              </table>

              <p>Упростим таблицу:</p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>Q (текущее)</td>
                    <td>NQ (следующее)</td>
                    <td>J</td>
                    <td>K</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0/1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0/1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0/1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>

              <p>где 0/1 – подача любого из двух значений.</p>
              <p>
                Поскольку необходимо сформировать сигналы для J и K всех триггеров, дополним
                таблицу, рассмотренную ранее:
              </p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td colspan="4">Текущее состояние</td>
                    <td colspan="4">Следующее состояние</td>
                    <td colspan="6">Формируемые сигналы</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>Q[2]</td>
                    <td>Q[1]</td>
                    <td>Q[0]</td>
                    <td>NQ[2]</td>
                    <td>NQ[1]</td>
                    <td>NQ[0]</td>
                    <td>#</td>
                    <td>J[2]</td>
                    <td>K[2]</td>
                    <td>J[1]</td>
                    <td>K[1]</td>
                    <td>J[0]</td>
                    <td>K[0]</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0/1</td>
                    <td>0/1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0/1</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>4</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td>0/1</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>5</td>
                    <td>0/1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0/1</td>
                    <td>1</td>
                    <td>0/1</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6</td>
                    <td>0/1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td>0/1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0/1</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0/1</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Данная таблица отображает КЦУ со входами <span>Q[2:0]</span> и выходами{' '}
                <span>J[2:0]</span>,<span>K[2:0]</span>, синтез которого необходимо завершить
                рассмотренным ранее способом (используя карты Карно).
              </p>
              <p>При этом видно, что K[0] возможно всегда сделать равным 1.</p>
              <p>На K[1] и J[1] возможно подать Q[0].</p>
              <p>На K[2] возможно подать Q[1].</p>
              <p>На J[2] возможно подать Q[0].</p>
              <p>Рассмотрим карту Карно для сигнала J[0].</p>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>J[0]</td>
                    <td colspan="4">Q[1]Q[0]</td>
                  </tr>
                  <tr>
                    <td>Q[2]</td>
                    <td>00</td>
                    <td>01</td>
                    <td>11</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td>0/1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td></td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>

              <p>Свободные ячейки карты Карно можно заполнить удобными значениями:</p>
              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>J[0]</td>
                    <td colspan="4">Q[1]Q[0]</td>
                  </tr>
                  <tr>
                    <td>Q[2]</td>
                    <td>00</td>
                    <td>01</td>
                    <td>11</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0/1</td>
                    <td>0/1</td>
                    <td>0/1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0/1</td>
                    <td>0/1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>

              {/* table */}
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>J[0]</td>
                    <td colspan="4">Q[1]Q[0]</td>
                  </tr>
                  <tr>
                    <td>Q[2]</td>
                    <td>00</td>
                    <td>01</td>
                    <td>11</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>

              <p>Таким образом, J[0] = !Q[2] | !Q[1].</p>
              <p>Построим схему синтезированного счетчика на JK-триггерах:</p>

              {/* pic */}
              <PicAndLabel num={5} image={pic5} label={null} />

              <h3>Понижающий счетчик / делитель частоты / частотный триггер</h3>
              <p>Данное устройство предназначено для деления частоты сигнала синхронизации.</p>
              <p>
                Делитель частоты по сути своей представляет собой в общем случае недвоичный счетчик.
                Для его реализации необходимо знать коэффициент деления (top) и сколько разрядов (N)
                понадобится для реализации данного счетчика. Например, если необходимо разработать
                делитель частоты на 20, то для реализации понадобится 5 разрядов.
              </p>
              <p>Соответственно, каждые 20 синхросигналов необходимо:</p>
              <ul>
                <li>сбрасывать счетчик</li>
                {/* code */}
                <pre
                  class="hljs"
                  style={{
                    display: 'block',
                    overflowX: 'hidden',
                    padding: '0.5em',
                    background: 'rgb(0, 0, 0)',
                    color: 'rgb(170, 170, 170)',
                    textIndent: '0',
                  }}>
                  <span class="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                    if
                  </span>{' '}
                  (rq == top) rq &lt;= &#123;N&#123;
                  <span class="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                    1'b0
                  </span>
                  &#125;&#125;;
                </pre>
                <li>формировать сигнал, когда счетчик достигнет максимального значения</li>
                {/* code */}
                <pre
                  class="hljs"
                  style={{
                    display: 'block',
                    overflowX: 'hidden',
                    padding: '0.5em',
                    background: 'rgb(0, 0, 0)',
                    color: 'rgb(170, 170, 170)',
                    textIndent: '0',
                  }}>
                  <span class="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                    wire
                  </span>{' '}
                  clkp = (rq == top) ?{' '}
                  <span class="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                    1
                  </span>{' '}
                  :{' '}
                  <span class="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                    0
                  </span>
                  ;
                </pre>
              </ul>

              <p>
                Также следует предусмотреть сигнал с коэффициентом заполнения 2, однако его частота
                будет вдвое меньше необходимой:
              </p>
              {/* code */}
              <pre
                class="hljs"
                style={{
                  display: 'block',
                  overflowX: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                  textIndent: '0',
                }}>
                <span class="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  always
                </span>{' '}
                @(
                <span class="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  posedge
                </span>{' '}
                rclkp)
                <br />
                {'\t'}rclkp1 &lt;= ~rclkp1;
              </pre>

              <h3>Антидребезговая схема (debounce)</h3>
              <p>
                В процессе работы с аппаратными кнопками в устройствах неминуемо возникает
                нежелательное явление многократного неконтролируемого замыкания и размыкания
                контактов из-за упругости материалов контактных схем — некоторое время контакты
                отскакивают друг от друга при соударениях, размыкая и замыкая электрическую цепь.
                Данное явление получило название "дребезг" контактов. Практически все механические
                кнопки, контакторы и переключатели в той или иной степени подвержены дребезгу.
              </p>
              <p>
                Бороться с этим явлением можно разными способами. Все способы борьбы можно разделить
                на аппаратные и программные.
              </p>
              <p>
                В микропроцессорных устройствах чаще всего используют программные способы. В этом
                случае необходимо предварительно обработать сигналы с подверженных влиянию дребезга
                цепей. Наиболее часто используется схема с подсчетом времени замкнутого состояния
                цепи — программа в течение заданного времени многократно считывает состояние
                контакта. Если в течение заданного времени не обнаружено ни одного изменения
                состояния на противоположное, то контакт считается устойчиво замкнутым.
              </p>
              <p>
                Данную схему предлагается реализовать в качестве счетчика, который будет продолжать
                счет, если не поступил сигнал сброса. Как только счетчик достиг определенного
                значения, формируется сигнал "нажатой" кнопки.
              </p>

              <h3>Фазовая автоподстройка частоты (ФАПЧ, PLL, Phase-Locked-Loop)</h3>
              <p>
                PLL (Phase-Locked Loop) — это специальный генератор со схемой подстройки частоты,
                это генератор, управляемый напряжением (VCO — voltage-controlled oscillator). В
                генераторе реализовано сравнение фаз сигнала входной частоты и сигнала выходной
                частоты. Измеренная разность фаз этих частот через отрицательную обратную связь как
                раз и управляет частотой генератора, фиксируя ее на заданном значении.
              </p>
              <p>
                PLL используется во многих электронных цифровых устройствах для обработки и
                генерирования сигналов, синхронизации.
              </p>

              {/* pic */}
              <PicAndLabel num={6} image={pic6} label={null} />

              <p>Наиболее применяемые в цифровой технике виды ФАПЧ:</p>
              <ul>
                <li>
                  <span style={{ fontWeight: 'bold' }}>Аналоговые или линейные ФАПЧ (APLL)</span>.
                  Фазовый детектор является аналоговым умножителем. ФНЧ является активным или
                  пассивным. Используется генератор, управляемый напряжением (ГУН).
                </li>
                <li>
                  <span style={{ fontWeight: 'bold' }}>Цифровой ФАПЧ (DPLL)</span>. Аналоговой ФАПЧ
                  с цифровым детектором фазы (типа xor, JK-триггер, фазочастотный детектор). Может
                  иметь цифровой делитель в петле обратной связи.
                </li>
                <li>
                  <span style={{ fontWeight: 'bold' }}>Полностью цифровой PLL (ADPLL)</span>.
                  Фазовый детектор, фильтр и генератор — цифровые. Использует генератор с цифровым
                  управлением частотой.
                </li>
                <li>
                  <span style={{ fontWeight: 'bold' }}>Программный ФАПЧ (SPLL)</span>. Функции
                  синтезатора реализуются с помощью программного обеспечения, исполняемого некоторым
                  цифровым устройством, например, микроконтроллером, а не специализированным
                  оборудованием.
                </li>
              </ul>
              <p>
                На основе ФАПЧ часто разрабатываются схемы, называемые [цифровыми] синтезаторами
                частот. Такие схемы принимаю на вход один синхросигнал, на выходе образуются
                несколько сигналов с другими частотами.
              </p>
            </Foldable>
          </div>

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Запустите Quartus II 15.0.</p>
              <p>2 Создайте проект Lab_M23.</p>

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>inc_cnt</span> — суммирующий
                счетчик
              </h3>
              <p>
                3 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>inc_cnt.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                4 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>inc_cnt</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={1} ext="v" />

              <p>5 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>6 Получите и изучите RTL-схему модуля.</p>
              <p>7 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={2} ext="pdf" />

              <p>
                8 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>inc_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 5 нс, коэффициент заполнения 20, фаза 1 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>en</span>: 0 на 60–80, 150–160 нс, 1
                  на 0–60, 80–150, 160–240 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 135–145 нс, 1 на
                  0–5, 10–135, 145–240 нс
                </li>
              </ul>
              <p>
                Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при этом
                разверните все шины., формат отображения всех шин. переведите в hexadecimal.
              </p>

              <InputWithPreview num={3} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>dec_cnt</span> — вычитающий
                счетчик
              </h3>
              <p>
                10 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>dec_cnt.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                11 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>dec_cnt</span> на Verilog HDL, дополнив
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
                <span style={{ fontFamily: 'Ubuntu Mono' }}>dec_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 5 нс, коэффициент заполнения 20, фаза 2 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>en</span>: 0 на 60–80, 150–160 нс, 1
                  на 0–60, 80–150, 160–240 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 135–145 нс, 1 на
                  0–5, 10–135, 145–240 нс
                </li>
              </ul>
              <p>
                16 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины., формат отображения всех шин. переведите в hexadecimal.
              </p>

              <InputWithPreview num={6} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>rev_cnt</span> — реверсивный
                счетчик
              </h3>
              <p>
                17 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>rev_cnt.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                18 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>rev_cnt</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={7} ext="v" />

              <p>19 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>20 Получите и изучите RTL-схему модуля.</p>
              <p>21 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={8} ext="pdf" />

              <p>
                22 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>rev_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 5 нс, коэффициент заполнения 20, фаза 2 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>rev</span>: 0 на 0–180, 210–230 нс, 1
                  на 180–210, 230–240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>en</span>: 0 на 60–80, 150–160 нс, 1
                  на 0–60, 80–150, 160–240 нс.
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 135–145 нс, 1 на
                  0–5, 10–135, 145–240 нс.
                </li>
              </ul>

              <p>
                23 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины, формат отображения всех шин переведите в hexadecimal.
              </p>

              <InputWithPreview num={9} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>load_rev_cnt</span> — реверсивный
                счетчик с загрузкой значений
              </h3>
              <p>
                24 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>load_rev_cnt.v</span>. Сделайте файл
                старшим в иерархии.
              </p>
              <p>
                25 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>rev_cnt</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={10} ext="v" />

              <p>26 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>27 Получите и изучите RTL-схему модуля.</p>
              <p>28 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={11} ext="pdf" />

              <p>
                29 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>rev_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 5 нс, коэффициент заполнения 20, фаза 2 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>rev</span>: 0 на 0–180, 210–230 нс, 1
                  на 180–210, 230–240 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>en</span>: 0 на 60–80, 150–160 нс, 1
                  на 0–60, 80–150, 160–240 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 135–145 нс, 1 на
                  0–5, 10–135, 145–240 нс
                </li>
                <li>
                  на 5, 22, 34 фронтах сигнала синхронизации загрузите в счетчик в качестве данных
                  последнюю цифру номера студенческого билета.
                </li>
              </ul>
              <p>
                30 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины, формат отображения шин всех переведите в hexadecimal.
              </p>

              <InputWithPreview num={12} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>div_cnt</span> — делитель частоты
              </h3>
              <p>
                31 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>div_cnt.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                32 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>div_cnt</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={13} ext="v" />

              <p>33 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>34 Получите и изучите RTL-схему модуля.</p>
              <p>35 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={14} ext="pdf" />

              <p>
                36 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>div_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 5 нс, коэффициент заполнения 20, фаза 2 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>en</span>: 0 на 60–80, 150–160 нс, 1
                  на 0–60, 80–150, 160–240 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 5–10, 135–145 нс, 1 на
                  0–5, 10–135, 145–240 нс
                </li>
              </ul>
              <p>37 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс.</p>
              <InputWithPreview num={15} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>debounce_cnt</span> —
                антидребезговый счетчик
              </h3>
              <p>
                38 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>debounce_cnt.v</span>. Сделайте файл
                старшим в иерархии.
              </p>
              <p>
                39 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>debounce_cnt</span> на Verilog HDL:
              </p>

              {/* code */}
              <InputWithPreview num={16} ext="v" />
              <p>
                параметр top в данном модуле определяет, сколько времени ждать до "реализации"
                кнопки.
              </p>
              <p>40 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>41 Получите и изучите RTL-схему модуля.</p>
              <p>42 Сохраните RTL-схему в pdf.</p>

              <InputWithPreview num={17} ext="pdf" />

              <p>
                43 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>debounce_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 5 нс, коэффициент заполнения 20, фаза 2 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>btn</span>: 0 на 25–60, 145–180,
                  220–320, 350–380, 490–500 нс, 1 на 0–25, 60–145, 180–220, 320–350, 380–490 нс
                </li>
              </ul>
              <p>44 Сохраните результат симуляции в виде скриншота промежутка от 0 до 500 нс.</p>

              <InputWithPreview num={18} ext="png" />

              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>pll_cnt</span> — модуль ФАПЧ
              </h3>
              <p>
                45 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>pll_cnt.v</span>. Сделайте файл старшим
                в иерархии.
              </p>
              <p>
                46 Создайте PLL с использованием мастера создания блоков со следующими параметрами:
              </p>
              <ul>
                <li>
                  Модуль <span style={{ fontWeight: 'bold' }}>Altera PLL</span> (Library / Basic
                  Functions / Clocks; PLLs and Resets / PLL / Altera PLL)
                </li>
                <li>
                  Название — <span style={{ fontFamily: 'Ubuntu Mono' }}>plllab</span>
                </li>
                <li>
                  File type — <span style={{ fontFamily: 'Ubuntu Mono' }}>Verilog</span>
                </li>
                <li>
                  General
                  <ul>
                    <li>Reference Clock Frequency – 50 MHz</li>
                    <li>Enable locked output port – ❌</li>
                    <li>Number of clocks – 1</li>
                    <li>Desired Frequency – 1 MHz</li>
                  </ul>
                </li>
                <li>
                  Cascading
                  <ul>
                    <li>
                      Create a <span style={{ fontFamily: 'Ubuntu Mono' }}>cascade_out</span> signal
                      to connect with a downstream PLL – ✔
                    </li>
                    <li>
                      Create an <span style={{ fontFamily: 'Ubuntu Mono' }}>adjpllin</span> or{' '}
                      <span style={{ fontFamily: 'Ubuntu Mono' }}>cclk</span> signal to connect with
                      an upstream PLL – ✔
                    </li>
                  </ul>
                </li>
              </ul>

              {/* some promt */}

              <p>
                47 Выполните подключение созданного модуля Altera PLL в нескольких экземплярах,
                описывая схему и дополнив код:
              </p>
              {/* pic */}
              {/* code */}

              <InputWithPreview num={19} ext="v" />

              <p>48 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>49 Получите и изучите RTL-схему модуля.</p>
              <p>
                50 Разверните полностью все компоненты одного из модулей. Сохраните RTL-схему в pdf.
              </p>

              <InputWithPreview num={20} ext="pdf" />

              <p>
                51 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>pll_cnt</span>. В качестве входных
                данных используйте:
              </p>
              <ul>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> – тактирующий сигнал,
                  период 2 нс, коэффициент заполнения 50, фаза 0 нс
                </li>
                <li>
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span>: 0 на 0–5 нс, 1 на 5–1000 нс
                </li>
              </ul>
              <p>
                52 Сохраните результат симуляции в виде скриншота промежутка от 0 до 1000 нс, при
                этом разверните все шины, формат отображения всех шин переведите в hexadecimal.
              </p>

              <InputWithPreview num={21} ext="png" />

              {withBoard ? <M23AdditionalBlock /> : null}
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
                <span style={{ fontFamily: 'Ubuntu Mono' }} className="text">
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

export default M23;
