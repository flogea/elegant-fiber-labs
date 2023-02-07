import React from 'react';
import axios from 'axios';
import { v4 } from 'uuid';

import '../../styles/Labs.scss';

import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import m11Qr from '../../images/qr/m11.png';
import { Context } from '../../Context';
import Foldable from '../../components/Labs/Foldable';
import pic1 from '../../images/M11/kcu.png';
import pic2 from '../../images/M11/formula1.png';
import pic3 from '../../images/M11/formula2.png';
import pic4 from '../../images/M11/karno1.png';
import pic5 from '../../images/M11/formula3.png';
import pic6 from '../../images/M11/karno2.png';
import pic7 from '../../images/M11/formula4.png';
import pic8 from '../../images/M11/electric_scheme.png';
import pic9 from '../../images/M11/diagramm1.png';
import pic10 from '../../images/M11/diagramm2.png';

function TableGenerate() {
  const alphabet = [
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const values = [0, 1];

  let str = [];
  const len = 2;
  const len2 = 21;

  let rand = Math.floor(Math.random() * values.length);

  for (let i = 0; i < len; i++) {
    let pos = Math.floor(Math.random() * alphabet.length);
    if (alphabet[pos] !== str) {
      str[i] = alphabet[pos];
    } else {
      i--;
    }
  }

  for (let i = 0; i < len2; i++) {
    let rand = Math.floor(Math.random() * values.length);
    str[i + 2] = values[rand];
  }

  console.log(str);

  return (
    <table className="iksweb">
      <tbody>
        <tr>
          <td colSpan="3">Входы</td>
          <td colSpan="3">Выходы</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b[1]</td>
          <td>b[0]</td>
          <td>{str[0]}</td>
          <td>{str[1]}[0]</td>
          <td>{str[1]}[1]</td>
        </tr>
        {/* {str &&
          str.map((name, index) => (
            <tr></tr>
          ))} */}
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>{str[2]}</td>
          <td>{str[3]}</td>
          <td>{str[4]}</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>{str[5]}</td>
          <td>{str[6]}</td>
          <td>{str[7]}</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>{str[8]}</td>
          <td>{str[9]}</td>
          <td>{str[10]}</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>{str[11]}</td>
          <td>{str[12]}</td>
          <td>{str[13]}</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>{str[14]}</td>
          <td>{str[15]}</td>
          <td>{str[16]}</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>{str[17]}</td>
          <td>{str[18]}</td>
          <td>{str[19]}</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>{str[20]}</td>
          <td>{str[21]}</td>
          <td>{str[22]}</td>
        </tr>
      </tbody>
    </table>
  );
}

function M11() {
  const lab_name = 'M11';
  const id_lab = new Date().getTime();
  const Subject = 'Вычислительная техника';
  const LabName = 'М11 QUARTUS II. СОЗДАНИЕ ПРОСТЕЙШИХ ЦИФРОВЫХ СХЕМ';
  const LabLink = 'ъыъ.рф/ьАуУ';

  const { performers, table1, table2, table3, table4, photo, quantity, secretKey } =
    React.useContext(Context);

  return (
    <div className="container">
      <HeaderLab Qr={m11Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />
      <Foldable header="Теоретические сведения">
        <p>
          Комбинационные цифровые устройства (КЦУ) — цифровые устройства, уровни сигналов на каждом
          выходе которых в каждый момент времени зависят только от комбинаций значений уровней
          входных сигналов.
        </p>{' '}
        <p>
          Описать работу КЦУ можно несколькими способами: таблицей [истинности, функционирования],
          аналитически (функцией), схематический (электронной схемой) и графически
          (осциллограммами).
        </p>
        <p>
          Существует методы перехода от одного способа к другому. Например, по табличному способу
          легко составить графическое описание и наоборот. Переход же к аналитическому описанию
          может вызвать затруднения. Обратившись к предмету изучения <i>дискретной математики</i>,
          можно вспомнить про методы минимизации функций. Одним из таких способов стал метод карт
          Карно, который будет продемонстрирован ниже.
        </p>
      </Foldable>
      <Foldable header="Синтез КЦУ по его таблице функционирования">
        <p>
          Синтез любого КЦУ производится согласно техническому заданию путем записи таблицы
          функционирования и, если это необходимо, составления по таблице системы логических
          уравнений в канонической форме. Сам же синтез сводится к разработке схемы КЦУ на
          логических элементах.
        </p>
        <p>
          Пусть синтезируемое КЦУ представлено в виде таблице. У синтезируемого устройства имеется
          три входных сигнала (a, b, c), два выходных (d, e).
        </p>
        <div className="content-image">
          <img src={pic1} alt="" />
        </div>

        <p>
          Следующим этапом синтеза КЦУ будет являться нахождение аналитических выражений
          (зависимостей) выходных сигналов от входных.
        </p>
        <p>
          Самым простым способом найти аналитическую зависимость является "сбор" по единицам или
          нулям, то есть нахождение совершенных конъюнктивной (СКНФ) или дизъюнктивной нормальных
          форм (СДНФ).
        </p>
        <div className="content-image">
          <img src={pic2} alt="" className="formula" />
          <img src={pic3} alt="" className="formula" />
        </div>

        <p>
          Однако, есть способы минимизировать данные функции. Минимизация логических функций
          является одной из типовых задач при изучении вычислительной техники. При составлении
          электрических схем минимизация позволяет упростить их, используя в ряде случаев более
          простые логические элементы.
        </p>
        <p>
          Для определения выражений можно воспользоваться картами Карно. Карта Карно для сигнала d
        </p>
        <div className="content-image">
          <img src={pic4} alt="" />
          <img src={pic5} alt="" className="formula" />
        </div>

        <p>Аналогично опишем e.</p>
        <div className="content-image">
          <img src={pic6} alt="" />
          <img src={pic7} alt="" className="formula" />
        </div>

        <p>По данным выражениям изобразим электрическую схему устройства</p>
        <div className="content-image">
          <img src={pic8} alt="" />
        </div>

        <p>
          Опишем работу КЦУ в виде временных зависимостей уровней на выводах. Оказалось, что данный
          способ описания поведения устройств является наиболее наглядным.
        </p>
        <p>
          Для рассмотренного выше примера цифрового устройства будет справедлива такая временная
          диаграмма с последовательным перебором входных сигналов:
        </p>
        <div className="content-image">
          <img src={pic9} alt="" />
        </div>

        <p>
          Справедлива также и временная диаграмма, в которой значения входных сигналов перебираются
          не последовательно, так как вспоминая определение КЦУ, при определенной комбинации
          значений входных сигналов значения выходных сигналов тоже будут однозначно определены:
        </p>
        <div className="content-image">
          <img src={pic10} alt="" />
        </div>
      </Foldable>
      <Foldable header="Язык описания аппаратуры — Verilog Hardware Description Language">
        <p>
          Язык Verilog — это язык текстового описания аппаратуры. Он используется для
          проектирования, моделирования, верификации цифровых микросхем.
        </p>
        <p>
          Язык Verilog был разработан в 1984-1985 году Филом Морби (Phil Moorby) во время его работы
          в компании Gateway Design Automation. Тогда же появился первый Верилог симулятор:
          Verilog-XL. Позже компанию Gateway купила Cadence Design Systems и в 1990-м сделала
          Verilog HDL публичным достоянием. В 1995-м году язык стал стандартом IEEE-1364-1995, IEEE
          Standard Hardware Description Language Based on the Verilog(R) Hardware Description
          Language.
        </p>
        <p>
          Синтаксис Verilog очень похож на синтаксис языка С, что должно упростить первоначальное
          освоение Verilog. Также Verilog имеет схожий препроцессор, а также конструкции “if”,
          “while”, “for” подобны с языком C.
        </p>
        <p>
          Помимо Verilog HDL существуют и другие языки описания аппаратуры: VHDL (Very high speed
          integrated circuit HDL), AHDL (Altera HDL), SystemVerilog. В настоящее время наиболее
          популярным является Verilog HDL.
        </p>
        <p>
          Две основные цели HDL – логическая симуляция и синтез. Во время симуляции на входы модуля
          подаются некоторые воздействия и проверяются выходы, чтобы убедиться, что модуль
          функционирует корректно. Во время синтеза текстовое описание модуля преобразуется в
          логические элементы.
        </p>

        <h4>Синтез</h4>
        <p>
          Логический синтез преобразует код на HDL в нетлист, описывающий цифровую аппаратуру (т.е.
          логические элементы и соединяющие их проводники). Логический синтезатор может выполнять
          оптимизацию для сокращения количества необходимых элементов. Нетлист может быть текстовым
          файлом или нарисован в виде схемы, чтобы было легче визуализировать систему.
        </p>

        <h4>Симуляция</h4>
        <p>
          Люди регулярно совершают ошибки. Ошибки в цифровой аппаратуре называют багами. Ясно, что
          устранение багов в цифровой системе очень важно, особенно когда от правильной работы
          аппаратуры зависят чьи-то жизни. Тестирование системы в лаборатории весьма трудоемко.
          Исследовать причины ошибок в лаборатории может быть очень сложно, так как наблюдать можно
          только сигналы, подключенные к контактам чипа, а то, что происходит внутри чипа, напрямую
          наблюдать невозможно. Исправление ошибок уже после того, как система была выпущена, может
          быть очень дорого. Например, исправление одной ошибки в новейших интегральных микросхемах
          стоит больше миллиона долларов и занимает несколько месяцев.
        </p>
      </Foldable>
      <Foldable header="Выполнение работы">
        <p>
          13 Запустите Quartus II 15.0. Выполните первоначальную настройку<sup>2</sup>.
        </p>
        <p>
          14 Создайте проект Lab_M11<sup>3</sup>.
        </p>
        <p>
          15 Получите логические выражения для выходов из таблиц функционирования устройств
          заданного варианта. Для этого можно воспользоваться картами Карно.
        </p>
        <button onClick={TableGenerate}>Сгенерировать</button>
        <div></div>

        <h3>
          Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>lab11_sch</span> — КЦУ, описанное
          схемой
        </h3>
        <p>
          16 Создайте новый файл типа Block Diagram Schematic File. Сохраните его под именем
          <span style={{ fontFamily: 'Ubuntu Mono' }}> lab11_sch.bdf</span>. Сделайте файл старшим в
          иерархии.
        </p>
        <p>17 Соберите логическую схему устройства в созданном файле. Сохраните файл.</p>
        <p>
          18 Выполните анализ и синтез проекта (Ctrl + K). Исправьте ошибки, если таковые имеются.
        </p>
        <p>19 Сохраните разработанную логическую схему в pdf.</p>
        {/* input */}
        <p>20 Получите и изучите RTL-схему модуля.</p>
        <p>21 Сохраните RTL-схему в pdf.</p>
        {/* input */}
        <p>
          22 Произведите функциональную симуляцию модуля{' '}
          <span style={{ fontFamily: 'Ubuntu Mono' }}>lab11_sch</span>. В качестве входных данных
          используйте
        </p>
        <ul>
          <li>a — счетчик, начальное значение 0, период 80 нс.</li>
          <li>b[1:0] — счетчик, начальное значение 0, период 20 нс.</li>
        </ul>
        <p>
          Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при этом
          разверните все шины.{' '}
          <i>
            Пример<sup>9</sup>:
          </i>
        </p>
        {/* input */}

        <h3>
          Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>lab11_hdl</span> — КЦУ, описанное на
          Verilog HDL
        </h3>
        <p>
          24 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
          <span style={{ fontFamily: 'Ubuntu Mono' }}>lab11_hdl.v</span>. Сделайте файл старшим в
          иерархии.
        </p>
        <p>
          25 Опишите проектируемый модуль{' '}
          <span style={{ fontFamily: 'Ubuntu Mono' }}>lab11_hdl</span> на Verilog HDL, дополнив код:
        </p>
        <pre
          className="hljs"
          style={{
            display: 'block',
            padding: '0.5em',
            background: 'rgb(0, 0, 0)',
            color: 'rgb(170, 170, 170)',
            overflowX: 'hidden',
            textIndent: '0',
            maxWidth: '80%',
          }}>
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            module
          </span>{' '}
          lab11_hdl ( <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            {'\t'}input
          </span>{' '}
          a, <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            {'\t'}input
          </span>{' '}
          [
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            1
          </span>
          :
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            0
          </span>
          ] b, <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            {'\t'}output
          </span>{' '}
          c, <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            {'\t'}output
          </span>{' '}
          [
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            1
          </span>
          :
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            0
          </span>
          ] d <br />
          );
          <br /> <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            assign
          </span>{' '}
          c = (a &amp; !b[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            0
          </span>
          ]) | (!a &amp; b[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            1
          </span>
          ]); <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            assign
          </span>{' '}
          d[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            0
          </span>
          ] = b[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            0
          </span>
          ] &amp; !a &amp; b[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            1
          </span>
          ];
          <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            assign
          </span>{' '}
          d[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            1
          </span>
          ] = !b[
          <span className="hljs-number" style={{ color: 'rgb(255, 85, 255)' }}>
            0
          </span>
          ] | !a;
          <br />
          <br />
          <span className="hljs-keyword" style={{ color: 'rgb(255, 255, 85)' }}>
            endmodule
            <br />
            <br />
          </span>
        </pre>
        <p style={{ color: 'red', fontWeight: '600' }}>
          NB! Название файла должно соответствовать названию модуля! Например, если модуль
          называется <span style={{ textDecoration: 'underline' }}>exersize_1</span>, то файл будет
          называться <span style={{ textDecoration: 'underline' }}>exersize_1.v.</span>
        </p>
        {/* input */}
        <p>26 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
        <p>27 Получите и изучите RTL-схему модуля.</p>
        <p>28 Сохраните RTL-схему в pdf.</p>
        {/* input */}
        <p>
          29 Произведите функциональную симуляцию разработанного модуля{' '}
          <span style={{ fontFamily: 'Ubuntu Mono' }}>lab11_hdl</span>. В качестве входных данных
          используйте{' '}
        </p>
        <ul>
          <li>a — счетчик, начальное значение 0, период 80 нс.</li>
          <li>b[1:0] — счетчик, начальное значение 0, период 20 нс.</li>
        </ul>
        <p>
          30 Сохраните результат симуляции в виде скриншота промежутка от 0 до 320 нс, при этом
          разверните все шины.
        </p>
        {/* input */}
        <p>31 Сравните полученные результаты (временные диаграммы и схемы).</p>
      </Foldable>
      <FooterLab />
    </div>
  );
}

export default M11;
