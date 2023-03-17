import React from 'react';
import axios from 'axios';

import '../../styles/Labs.scss';

import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import { Context } from '../../Context';
import Foldable from '../../components/Labs/Foldable';
import preloader from '../../images/Infinity.gif';
import ParticlesBG from '../../components/ParticlesBG';

import sevenSegmentIndicator from '../../images/M12/sevenSegmentIndicator.png';
import schemeOfIndicator from '../../images/M12/schemeOfIndicator.png';
import tableOfIndicators from '../../images/M12/tableOfIndicators.png';
import anode from '../../images/M12/anode.gif';
import cathode from '../../images/M12/cathode.gif';
import asciiCodeChart from '../../images/M12/asciiCodeChart.png';
import kakietoSignals from '../../images/M12/kakietoSignals.png';
import driver7seg from '../../images/M12/driver7seg.svg';
import driverascii from '../../images/M12/driverascii.svg';
import M12AdditionalBlock from '../../components/Labs/M12AdditionalBlock';

function M12() {
  const lab_name = 'M12';
  const Subject = 'Вычислительная техника';
  const LabName = 'М12 КОДОПРЕОБРАЗОВАТЕЛИ В ОБЩЕМ ВИДЕ (ASCII, 7SEG DRIVER)';
  const LabLink = 'ъыъ.рф/ьАуУ';

  const { performers, setPerformers, photo, quantity, secretKey, setDisabledInp, darkMode } =
    React.useContext(Context);

  const [id_lab, setIdLab] = React.useState('');
  const [currentId, setCurrentId] = React.useState('');
  const [withBoard, setWithBoard] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);
  const [dataName, setDataName] = React.useState({
    file1: '',
    file2: '',
    file3: '',
    file4: '',
    file5: '',
    file6: '',
  });

  const formRef = React.useRef();

  React.useEffect(() => {
    setIdLab(new Date().getTime());
  }, []);

  const labHandler = async (e) => {
    // e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(formRef.current);
    // try {
    // formData.append('lab_name', lab_name);
    // formData.append('id_lab', id_lab);
    // formData.append('letterOne', array[0]);
    // formData.append('letterTwo', array[1]);
    // formData.append('token', secretKey.token);
    // formData.append('photo', photo);
    // formData.append('quantity', quantity.quantity);

    console.log(Array.from(formData));

    // try {
    //   await axios
    //     .post('/api/labs/m11', formData, {
    //       headers: {
    //         'Content-type': 'multipart/form-data',
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       setIsLoading(false);
    //       setIsSended(true);
    //     });
    // } catch (error) {
    //   console.log(error);
    //   setIsLoading(false);
    //   setIsSended('error');
    // }
  };

  return (
    <>
      {darkMode ? <ParticlesBG /> : null}
      <div className={darkMode ? 'container dark' : 'container'}>
        <i className="centeredInRow">В разработке :)</i>
        <HeaderLab Subject={Subject} LabName={LabName} />
        <form ref={formRef}>
          <Performers />
          <div className="centeredInRow">
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
                  onChange={(e) => setCurrentId(e.target.value)}
                  placeholder="ID"
                />
                <button className="generate__btn">Продолжить</button>
              </div>
            </Foldable>
            <Foldable header="Теоретические сведения">
              <p>
                В качестве устройств отображения информации в простейшем случае используются
                индикаторы в виде светодиода. С дальнейшим развитием электроники и видеотехники в
                качестве устройств отображения стали применяться сегментные индикаторы и дисплеи.
              </p>
              <p>
                Наиболее употребляемый в цифровой технике семисегментный индикатор — индикатор на
                семи светодиодах.
              </p>
            </Foldable>
            <Foldable header="Семисегментные индикаторы и драйверы к ним">
              <p>
                Семисегментный индикатор — устройство отображения цифровой информации. Это наиболее
                простая реализация индикатора, который может отображать арабские цифры (и некоторые
                буквы латинского алфавита).
              </p>
              <p>
                Семисегментный индикатор, как говорит его название, состоит из семи элементов
                индикации (сегментов), включающихся и выключающихся по отдельности.
              </p>
              <p>
                Сегменты обозначаются буквами от A до G; восьмой сегмент — десятичная точка (decimal
                point, DP), предназначенная для отображения дробных чисел.
              </p>

              <div className="content-image">
                <img src={sevenSegmentIndicator} alt="sevenSegmentIndicator" name="pic1" />
                <label htmlFor="pic1">Семисегментный индикатор</label>
              </div>

              <div className="content-image">
                <img src={schemeOfIndicator} alt="schemeOfIndicator" name="pic2" />
                <label htmlFor="pic2">Представление сегментов (a — g) индикатора</label>
              </div>

              <div className="content-image">
                <img src={tableOfIndicators} alt="tableOfIndicators" name="pic3" />
                <label htmlFor="pic3">
                  Все возможные варианты отображения на семисегментном индикаторе{' '}
                </label>
              </div>

              <p>Существует две реализации такого индикатора: с общим анодом и с общим катодом.</p>

              <div className="content-image">
                <img src={anode} alt="anode" name="pic4" />
                <label htmlFor="pic4">Схема с общим анодом</label>
              </div>

              <div className="content-image">
                <img src={cathode} alt="cathode" name="pic5" />
                <label htmlFor="pic5">Схема с общим катодом</label>
              </div>

              <p>
                В зависимости от этого каждый сегмент таких индикаторов управляются соответственно
                «0» и «1».
              </p>
              <p>
                Например, рассматривая схему с общим анодом, при подаче логической «1» на общий
                анод, осуществить управление каждым отдельным светодиодом можно только при подаче
                логического «0» на необходимый катод светодиода. В случае со схемой с общим катодом
                ситуация обратная: на общий катод подается логический «0», а управление
                осуществляется подачей логических «1» на необходимые аноды.
              </p>
            </Foldable>
            <Foldable header="Вывод информации в формате ASCII">
              <p>
                ASCII (American standard code for information interchange) — название таблицы
                (кодировки, набора), в которой некоторым распространенным печатным и непечатным
                символам сопоставлены числовые коды. Таблица была разработана и стандартизирована в
                США, в 1963 году.
              </p>
              <p>Таблица ASCII определяет коды для символов:</p>
              <ul>
                <li>Десятичных цифр;</li>
                <li>латинского алфавита;</li>
                <li>национального алфавита;</li>
                <li>знаков препинания;</li>
                <li>управляющих символов.</li>
              </ul>
              <p>
                В программном пакете Quartus поддерживается только символы ASCII-кода от 33dec
                (21hex, !) до 126dec (7Ehex, ~) включительно. Следовательно, вся информация должна
                быть представлена с использованием только этих символов.{' '}
              </p>
              <p>
                Для вывода одного символа ASCII требуется использовать 8-разрядную шину.
                Соответственно, если необходимо выводить слова из N символов, следует использовать
                шину разрядностью [N*8-1:0], то есть 8N-разрядную.
              </p>
              <p>
                На временных диаграммах необходимо включить отображение информации (Radix) в виде
                ASCII для соответствующего сигнала.
              </p>
              <p>
                Сам драйвер ASCII кода может быть описан аналогично драйверу семисегментного
                индикатора. То есть модуль преобразует выходной сигнал в отображаемую информацию,
                работая кодопреобразователем.
              </p>
              <div className="content-image">
                <img src={asciiCodeChart} alt="asciiCodeChart" name="pic6" />
              </div>
            </Foldable>
          </div>

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Запустите Quartus II 15.0.</p>
              <p>2 Создайте проект Lab_M12.</p>
              <h3>
                Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>driver7seg</span> — драйвер для
                семисегментного индикатора
              </h3>
              <p>
                3 Составьте таблицу функционирования устройства «driver7seg», основываясь на том,
                что будут применяться схемы с <b>общим анодом</b>, т. е. управление будет
                производиться нулями — сегмент зажигается нулем.
              </p>
              <table className="iksweb">
                <tbody>
                  <tr>
                    <td rowSpan="2">#</td>
                    <td colSpan="4">bin[3:0]</td>
                    <td colSpan="7">7seg[6:0]</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6/g</td>
                    <td>5/f</td>
                    <td>4/e</td>
                    <td>3/d</td>
                    <td>2/c</td>
                    <td>1/b</td>
                    <td>0/a</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" max="1" name="" />
                    </td>
                    <td>
                      <input type="number" min="0" max="1" name="" />
                    </td>
                    <td>
                      <input type="text" maxLength="1" name="" pattern={'d [0-9]'} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                4 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu-Mono', textDecoration: 'underline' }}>
                  driver7seg.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                5 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu-Mono' }}>driver7seg</span> на Verilog HDL,
                дополнив код:
              </p>
              <pre
                className="hljs"
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                }}>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  module
                </span>{' '}
                driver7seg ( <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}input
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  3
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] bin, <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}output
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  6
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] hex <br />
                ); <br /> <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  reg
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  6
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] rhex; <br /> <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  always
                </span>{' '}
                @* <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'    '}case
                </span>{' '}
                (bin) <br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}4'b0000
                </span>
                : rhex ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  7'b1000000
                </span>
                ; <br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}4'b0001
                </span>
                : rhex ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  7'b1001111
                </span>
                ; <br />
                <span className="hljs-comment" style={{ color: 'rgb(85, 255, 255)' }}>
                  {'\t'}// <br />
                </span>
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}4'b1111
                </span>
                : rhex ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  7'b1001111
                </span>
                ; <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'    '}endcase <br /> <br />
                </span>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  assign
                </span>{' '}
                hex = rhex; <br /> <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  endmodule <br /> <br />
                </span>
              </pre>

              <div className="input-file verilog">
                <input
                  type="file"
                  name="file1"
                  onChange={(e) => setDataName({ ...dataName, file1: e.target.files[0].name })}
                  required="required"
                  id="upload__input__verilog1"
                  accept=".v"
                />
                <label htmlFor="upload__input__verilog1"></label>
              </div>
              <span id="output__data1" className="output__span">
                {dataName.file1}
              </span>

              <p>
                6 Выполните анализ и синтез проекта (Ctrl + K). Исправьте ошибки, если таковые
                имеются.
              </p>
              <p>7 Получите и изучите RTL-схему модуля.</p>
              <p>8 Сохраните RTL-схему в pdf.</p>

              <div className="input-file pdf">
                <input
                  type="file"
                  name="file2"
                  onChange={(e) => setDataName({ ...dataName, file2: e.target.files[0].name })}
                  required="required"
                  id="upload__input__pdf1"
                  accept=".pdf"
                />
                <label htmlFor="upload__input__pdf1"></label>
              </div>
              <span id="output__data2" className="output__span">
                {dataName.file2}
              </span>

              <p>
                9 Произведите функциональную симуляцию модуля driver7seg. В качестве входных данных
                используйте последовательность цифр номера студенческого билета, а также цифр от 0
                до F. Длительность одной цифры установите равной 10 нс. Промежуток от 70 до 230 нс
                рекомендуется задать инструментом Count Value. Например:
              </p>
              <div className="content-image">
                <img src={kakietoSignals} alt="kakietoSignals" />
              </div>

              <p>
                10 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины.
              </p>

              <div className="input-file png">
                <input
                  type="file"
                  name="file3"
                  onChange={(e) => setDataName({ ...dataName, file3: e.target.files[0].name })}
                  required="required"
                  id="upload__input__png1"
                  accept=".png"
                />
                <label htmlFor="upload__input__png1"></label>
              </div>
              <span id="output__data3" className="output__span">
                {dataName.file3}
              </span>
              {withBoard ? <M12AdditionalBlock /> : null}

              <div className="content-image">
                <img src={driver7seg} alt="driver7seg" name="pic7" />
                <label htmlFor="pic7">
                  Разработанный модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>driver7seg</span>
                </label>
              </div>

              <h2>Модуль driverascii — драйвер для вывода сигналов в формате ASCII</h2>
              <p>
                16 Создайте новый файл типа Verilog HDL File. Сохраните его под именем
                driverascii.v. Сделайте файл старшим в иерархии.
              </p>
              <p>17 Опишите проектируемый модуль driverascii на Verilog HDL, дополнив код:</p>

              <pre
                className="hljs"
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  padding: '0.5em',
                  background: 'rgb(0, 0, 0)',
                  color: 'rgb(170, 170, 170)',
                }}>
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  module
                </span>{' '}
                driverascii ( <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}input
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  3
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] bin,
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'\t'}output
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  1
                </span>
                *
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8
                </span>
                -
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  1
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] ascii
                <br /> );
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  reg
                </span>{' '}
                [
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  1
                </span>
                *
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8
                </span>
                -
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  1
                </span>
                :
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  0
                </span>
                ] rascii;
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  always
                </span>{' '}
                @*
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'    '}case
                </span>{' '}
                (bin)
                <br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}4'b0000
                </span>
                : rascii ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8'h30
                </span>
                ;<br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}4'b0001
                </span>
                : rascii ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8'h31
                </span>
                ;<br />
                <br />
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  {'\t'}4'b1111
                </span>
                : rascii ={' '}
                <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
                  8'h46
                </span>
                ;<br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  {'    '}endcase
                </span>
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  assign
                </span>{' '}
                ascii = rascii;
                <br />
                <br />
                <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
                  endmodule
                </span>
                <br />
                <br />
              </pre>

              <p>
                Реализуемый модуль должен выводить числа 0ASCII — FASCII при введенных 0
                <sub>hex</sub> — F<sub>hex</sub>. Соответственно, вход модуля — четырехразрядная
                шина bin[3:0], выход — восьмиразрядная шина{' '}
                <span style={{ fontFamily: 'Ubunto Mono' }}>ascii</span>[8*1-1:0].
              </p>

              <div className="input-file verilog">
                <input
                  type="file"
                  name="file4"
                  onChange={(e) => setDataName({ ...dataName, file4: e.target.files[0].name })}
                  required="required"
                  id="upload__input__verilog2"
                  accept=".v"
                />
                <label htmlFor="upload__input__verilog2"></label>
              </div>
              <span id="output__data4" className="output__span">
                {dataName.file4}
              </span>

              <p>
                18 Выполните анализ и синтез проекта (Ctrl + K). Исправьте ошибки, если таковые
                имеются.
              </p>
              <p>19 Получите и изучите RTL-схему модуля.</p>
              <p>20 Сохраните RTL-схему в pdf</p>

              <div className="input-file pdf">
                <input
                  type="file"
                  name="file5"
                  onChange={(e) => setDataName({ ...dataName, file5: e.target.files[0].name })}
                  required="required"
                  id="upload__input__pdf2"
                  accept=".pdf"
                />
                <label htmlFor="upload__input__pdf2"></label>
              </div>
              <span id="output__data5" className="output__span">
                {dataName.file5}
              </span>

              <p>
                21 Произведите функциональную симуляцию модуля driverascii. В качестве входных
                данных используйте последовательность цифр номера студенческого билета, а также цифр
                от 0 до F. Длительность одной цифры установите равной 10 нс. Промежуток от 70 до 230
                нс рекомендуется задать инструментом Count Value.
              </p>

              <div className="input-file png">
                <input
                  type="file"
                  name="file6"
                  onChange={(e) => setDataName({ ...dataName, file6: e.target.files[0].name })}
                  required="required"
                  id="upload__input__png2"
                  accept=".png"
                />
                <label htmlFor="upload__input__png2"></label>
              </div>
              <span id="output__data6" className="output__span">
                {dataName.file6}
              </span>

              <p>
                22 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при
                этом разверните все шины, формат отображения шины ascii переведите в ASCII
                <sup>11</sup>.
              </p>

              <div className="content-image">
                <img src={driverascii} alt="driverascii" name="pic7" />
                <label htmlFor="pic7">
                  Разработанный модуль{' '}
                  <span style={{ fontFamily: 'Ubuntu Mono' }}>driverascii</span>
                </label>
              </div>
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
                disabled={
                  !(
                    dataName.file1 &&
                    dataName.file2 &&
                    dataName.file3 &&
                    dataName.file4 &&
                    dataName.file5 &&
                    dataName.file6
                  )
                    ? 'disabled'
                    : null
                }>
                {isSended ? (isSended === 'error' ? 'Ошибка' : 'Отправлено') : 'Отправить'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default M12;
