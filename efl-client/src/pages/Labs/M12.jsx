import React from 'react';
import axios from 'axios';

import '../../styles/Labs.scss';

import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import { Context } from '../../Context';
import Foldable from '../../components/Labs/Foldable';
import preloader from '../../images/Infinity.gif';

function M12() {
  const lab_name = 'M12';
  const Subject = 'Вычислительная техника';
  const LabName = 'М12 КОДОПРЕОБРАЗОВАТЕЛИ В ОБЩЕМ ВИДЕ (ASCII, 7SEG DRIVER)';
  const LabLink = 'ъыъ.рф/ьАуУ';

  const { performers, setPerformers, photo, quantity, secretKey, setDisabledInp } =
    React.useContext(Context);

  return (
    <div className="container">
      <HeaderLab Subject={Subject} LabName={LabName} />
      <form>
        <Performers />
        <div className="foldable__content">
          <Foldable header="Теоретические сведения">
            <p>
              В качестве устройств отображения информации в простейшем случае используются
              индикаторы в виде светодиода. С дальнейшим развитием электроники и видеотехники в
              качестве устройств отображения стали применяться сегментные индикаторы и дисплеи.
            </p>
            <p>
              Наиболее употребляемый в цифровой технике семисегментный индикатор — индикатор на семи
              светодиодах.
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

            <img src="" alt="" name="pic1" />
            <label htmlFor="pic1">Семисегментный индикатор</label>

            <img src="" alt="" name="pic2" />
            <label htmlFor="pic2">Представление сегментов (a — g) индикатора</label>

            <img src="" alt="" name="pic3" />
            <label htmlFor="pic3">
              Все возможные варианты отображения на семисегментном индикаторе{' '}
            </label>

            <p>Существует две реализации такого индикатора: с общим анодом и с общим катодом.</p>

            <img src="" alt="" name="pic4" />
            <label htmlFor="pic4">Схема с общим анодом</label>

            <img src="" alt="" name="pic5" />
            <label htmlFor="pic5">Схема с общим катодом</label>

            <p>
              В зависимости от этого каждый сегмент таких индикаторов управляются соответственно «0»
              и «1».
            </p>
            <p>
              Например, рассматривая схему с общим анодом, при подаче логической «1» на общий анод,
              осуществить управление каждым отдельным светодиодом можно только при подаче
              логического «0» на необходимый катод светодиода. В случае со схемой с общим катодом
              ситуация обратная: на общий катод подается логический «0», а управление осуществляется
              подачей логических «1» на необходимые аноды.
            </p>
          </Foldable>
          <Foldable header="Вывод информации в формате ASCII">
            <p>
              ASCII (American standard code for information interchange) — название таблицы
              (кодировки, набора), в которой некоторым распространенным печатным и непечатным
              символам сопоставлены числовые коды. Таблица была разработана и стандартизирована в
              США, в 1963 году.
            </p>
            <p>
              Таблица ASCII определяет коды для символов:{' '}
              <ul>
                <li>Десятичных цифр;</li>
                <li>латинского алфавита;</li>
                <li>национального алфавита;</li>
                <li>знаков препинания;</li>
                <li>управляющих символов.</li>
              </ul>
            </p>
            <p>
              В программном пакете Quartus поддерживается только символы ASCII-кода от 33dec (21hex,
              !) до 126dec (7Ehex, ~) включительно. Следовательно, вся информация должна быть
              представлена с использованием только этих символов.{' '}
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
            <img src="" alt="" name="pic6" />
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
              3 Составьте таблицу функционирования устройства «driver7seg», основываясь на том, что
              будут применяться схемы с <b>общим анодом</b>, т. е. управление будет производиться
              нулями — сегмент зажигается нулем.
            </p>
            <table class="iksweb">
              <tbody>
                <tr>
                  <td rowspan="2">#</td>
                  <td colspan="4">bin[3:0]</td>
                  <td colspan="7">7seg[6:0]</td>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
              <span style={{ fontFamily: 'Ubuntu-Mono' }}>driver7seg</span> на Verilog HDL, дополнив
              код:
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

            <div className="input-file">
              <input
                type="file"
                name="file4"
                //onChange={(e) => setDataName4(e.target.files[0])}
                required="required"
                id="upload__input__v"
                accept=".v"
              />
              <label htmlFor="upload__input__v">Файл</label>
            </div>
            <span id="output__data4" className="output__span">
              {/* {dataName4.name} */}
            </span>

            <p>
              6 Выполните анализ и синтез проекта (Ctrl + K). Исправьте ошибки, если таковые
              имеются.
            </p>
            <p>7 Получите и изучите RTL-схему модуля.</p>
            <p>8 Сохраните RTL-схему в pdf.</p>

            <div className="input-file">
              <input
                type="file"
                name="file4"
                //onChange={(e) => setDataName4(e.target.files[0])}
                required="required"
                id="upload__input__v"
                accept=".v"
              />
              <label htmlFor="upload__input__v">Файл</label>
            </div>
            <span id="output__data4" className="output__span">
              {/* {dataName4.name} */}
            </span>

            <p>
              9 Произведите функциональную симуляцию модуля driver7seg. В качестве входных данных
              используйте последовательность цифр номера студенческого билета, а также цифр от 0 до
              F. Длительность одной цифры установите равной 10 нс. Промежуток от 70 до 230 нс
              рекомендуется задать инструментом Count Value. Например:
            </p>
            <img src="" alt="" />
            <p>
              10 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс, при этом
              разверните все шины.
            </p>

            <div className="input-file">
              <input
                type="file"
                name="file4"
                //onChange={(e) => setDataName4(e.target.files[0])}
                required="required"
                id="upload__input__v"
                accept=".v"
              />
              <label htmlFor="upload__input__v">Файл</label>
            </div>
            <span id="output__data4" className="output__span">
              {/* {dataName4.name} */}
            </span>

            <p>
              11 Выполните распиновку для созданного модуля driver7seg, используя планировщик
              выводов:
            </p>
            <ul>
              <li>bin[3:0] — тумблеры sw[3:0];</li>
              <li>hex[6:0] — сегменты индикатора hex0[6:0].</li>
            </ul>
            <p>
              {' '}
              12 Выполните полную сборку (компиляцию) проекта (Ctrl+L). По окончании сборки в
              каталоге проекта будет создана конфигурация c расширением <b>.sof</b>. Имя данного
              файла совпадает с названием проекта.
            </p>
            <p>
              13 Выполните программирование отладочной платы, загрузив в нее конфигурацию модуля{' '}
              <span style={{ fontFamily: 'Ubuntu-Mono' }}>driver7seg.</span>
            </p>
            <p>
              14 Проверьте корректность разработанного модуля, изменяя входные сигналы и наблюдая за
              результатом.
            </p>
            <p>15 Сделайте несколько фотографий при различных входных сигналах.</p>
          </div>
        </div>
      </form>
      <FooterLab />
    </div>
  );
}

export default M12;
