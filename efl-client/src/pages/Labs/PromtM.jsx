import React from 'react';

import '../../styles/Labs.scss';

import Foldable from '../../components/Labs/Foldable';
import pic1 from '../../images/promt/pic1.png';
import pic2 from '../../images/promt/pic2.png';

function PromtM() {
  return (
    <div className="container">
      <div className="foldable__content">
        <Foldable header="Приложение A. Сведения о Quartus II 15.0. Элементы меню">
          <p>
            Quartus – САПР, разработанная компанией Altera (ныне подразделение Intel FPGA). САПР
            предназначена для проектирования и отладки цифровых устройств для СБИС ПЛ компании
            Altera. Данный цикл лабораторных работ написан для отладочной платы DE1-SoC,
            использующей систему на кристалле 5CSEMA5F31C6.
          </p>
          <p>Наиболее часто используемые элементы строки меню САПР:</p>

          {/* TABLE */}
          <table className="iksweb">
            <tbody>
              <tr>
                <td>Меню</td>
                <td>Элементы</td>
                <td>Описание</td>
                <td>Hot-key</td>
              </tr>
              <tr>
                <td rowSpan="9">File</td>
                <td>New...</td>
                <td>Создать новый файл</td>
                <td>Ctrl-N</td>
              </tr>
              <tr>
                <td>Open...</td>
                <td>Открыть существующий файл</td>
                <td>Ctrl-O</td>
              </tr>
              <tr>
                <td>New Project Wizard</td>
                <td>Создать новый проект с помощью мастера создания проектов</td>
                <td></td>
              </tr>
              <tr>
                <td>Open Project...</td>
                <td>Открыть существующий проект</td>
                <td>Ctrl-J</td>
              </tr>
              <tr>
                <td>Close Project</td>
                <td>Закрыть проект</td>
                <td></td>
              </tr>
              <tr>
                <td>Save</td>
                <td>Сохранить файл</td>
                <td>Ctrl-S</td>
              </tr>
              <tr>
                <td>Save As...</td>
                <td>Сохранить файл как…</td>
                <td></td>
              </tr>
              <tr>
                <td>Save All</td>
                <td>Сохранить все файлы</td>
                <td>Ctrl-Shift-S</td>
              </tr>
              <tr>
                <td>Create / Update</td>
                <td>Создание / Обновление</td>
                <td></td>
              </tr>
              <tr>
                <td>View</td>
                <td>Utility Windows</td>
                <td>Используется для настройки окна САПР</td>
                <td></td>
              </tr>
              <tr>
                <td>Project</td>
                <td>Set as Top-Level Entity</td>
                <td>Выбрать файл объектом высшего уровня. Необходимо для выполнения сборки</td>
                <td>Ctrl-Shift-J</td>
              </tr>
              <tr>
                <td rowSpan="4">Assignments</td>
                <td>Device...</td>
                <td>Выбрать/сменить устройство</td>
                <td></td>
              </tr>
              <tr>
                <td>Settings...</td>
                <td>Открыть настройки проекта</td>
                <td>Ctrl-Shift-E</td>
              </tr>
              <tr>
                <td>Pin Planner</td>
                <td>Открыть планировщик контактов FPGA</td>
                <td>Ctrl-Shift-N</td>
              </tr>
              <tr>
                <td>Remove Assignments...</td>
                <td>Сбросить назначения</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan="3">Processing</td>
                <td>Start Compilation</td>
                <td>Скомпилировать проект</td>
                <td>Ctrl-L</td>
              </tr>
              <tr>
                <td>Start Analysis &amp; Synthesis</td>
                <td>Анализировать и синтезировать проект</td>
                <td>Ctrl-K</td>
              </tr>
              <tr>
                <td>Start I/O Assignment Analysis</td>
                <td>Анализировать назначения входов/выходов</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan="4">Tools</td>
                <td>Netlist Viewer / RTL Viewer</td>
                <td>Просмотреть RTL-схему проекта</td>
                <td></td>
              </tr>
              <tr>
                <td>Netlist Viewer / State Machine Viewer</td>
                <td>Просмотреть конечный автомат проекта</td>
                <td></td>
              </tr>
              <tr>
                <td>Programmer</td>
                <td>Программатор</td>
                <td></td>
              </tr>
              <tr>
                <td>Options...</td>
                <td>Открыть настройки САПР</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            В качестве первоначальной настройки выполните подключение пакета симуляции ModelSim к
            Quartus II: Tools — Options — EDA Tools Options, скопировать путь к пакету ModelSim в
            поле ModelSim—Altera. При этом замените{' '}
            <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
              modelsim_ae
            </span>{' '}
            на{' '}
            <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
              modelsim_ase
            </span>
            .
          </p>
        </Foldable>
        <Foldable header="Приложение B. Создание нового проекта в Quartus II 15.0">
          <ol>
            <li>
              Откройте мастер создания проектов, выбрав <b>New Project Wizard</b> на приветственной
              странице САПР или через меню <b>New — New Project Wizard</b>.
              <img src={pic1} alt="" />
            </li>
            <li>
              В окне <b>Introduction</b> нажмите Next.
            </li>
            <li>
              Укажите путь, где будет находится проект и название проекта в окне{' '}
              <b>Directory, Name, Top-Level Intity</b>. Нажмите Next. Каждый проект рекомендуется
              создавать в отдельной папке.
            </li>
            <li>
              В окне <b>Project Type</b> установите переключатель на пункте Empty Project, выбрав
              пустой проект. Нажмите Next.
            </li>
            <li>
              В окне <b>Add Files</b> нажмите , чтобы указать пути к файлам, которые вы хотите
              добавить в новый проект (по умолчанию не требуется). Нажмите Add, чтобы добавить
              файлы. Нажмите Next.
            </li>
            <li>
              В окне <b>Family & Device Settings</b> выберете Family: Cyclone V, Devices: All.{' '}
              <img src={pic2} alt="" />
            </li>
            <li>
              В таблице <b>Available devices</b> в столбце Name выберете <b>5CSEMA5F31C6</b>. Можно
              воспользоваться фильтром и/или поиском. Нажмите Finish.
            </li>
          </ol>
        </Foldable>
        <Foldable header="Приложение D. Симулятор в Quartus II 15.0">
          <ol>
            <li>
              Создайте новый файл типа{' '}
              <i>
                Verification/Debugging Files / <b>University Program VWF</b>
              </i>
              .
            </li>
            <li>
              В окне <b>Simulation Waveform Editor</b> вызовите контекстное меню, нажав ПКМ в левой
              части рабочего поля. Выберите <i>Insert Node or Bus</i>.
            </li>
            <li>
              В окне <b>Insert Node or Bus</b> нажмите <b>Node Finder</b>…
            </li>
            <li>
              В окне <b>Node Finder</b> установите необходимые фильтры поиска (по умолчанию не
              требуется) и нажмите <i>List</i>.
            </li>
            <li>
              Выберите необходимые сигналы из найденных в левой части окна и скопируйте их в правую
              часть, нажав или , если хотите выбрать все (<i>по умолчанию все</i>). Нажмите OK.
            </li>
            <li>
              В окне <b>Insert Node or Bus</b> нажмите <i>OK</i>.
            </li>
            <li>Расположите сигналы в нужном порядке, перетаскивая их мышью.</li>
            <li>
              Задайте необходимые параметры симуляции, используя инструменты на верхней панели окна
              <b>Simulation Waveform Editor</b> и выделяя нужные временные промежутки нужных
              сигналов или сигналы целиком, щелкая по его названию в левой части симулятора:
            </li>
            <li>
              Измените основание системы счисления необходимых сигналов, щелкнув ПКМ на сигнале и
              выбрав <i>Radix</i> (по умолчанию не требуется).
            </li>
            <li>Сохраните файл.</li>
            <li>
              Запустите функциональную симуляцию при помощи инструмента в меню <b>Simulation</b>.
            </li>
          </ol>
        </Foldable>
        <Foldable header="Приложение E. Планировщик контактов в Quartus II 15.0">
          <ol>
            <li>Откройте планировщик контактов : Assignments — Pin planner (Ctrl+Shift+N).</li>
            <li>
              Убедитесь, что выбрано верное устройство в рабочей области со схематичным отображением
              микросхемы. В случае, если устройство выбрано неверно, закройте Pin Planner, выберете
              устройство через инструмент Assignments — Device, после чего вновь откройте Pin
              Planner.
            </li>
            <li>
              Присвойте выводам модуля конктерные контакты микросхемы и установите стандарт логики.
              <br />
              Присвоение выводов спроектированного модуля осуществляется в рабочей области All Pins
              (по умолчанию в нижней части окна Pin Planner). Столбец Node Name содержит
              наименования выводов, Direction — их тип (недоступно для редактирования), Location —
              принадлежность выводов спроектированного модуля конкретным контактам микросхемы, I/O
              Standard — стандарт логики вывода. Необходимо присвоить выводам конкретные контакты и
              стандарт логики.
              <br />
              Редактирование ячеек столбца Location удобно осуществлять с клавиатуры, предварительно
              упорядочив по возрастанию столбец Node Name и вводя буквенно-цифровое название
              контакта (без PIN_) с последующим нажатием клавиши Enter, а столбца I/O Standard —
              используя выпадающее меню для каждой ячейки. При этом содержимое ячеек можно
              копировать, в ячейках работает автодополнение. <br /> Адреса контактов и стандарт
              логики следует взять из таблицы. (тут ссылка на приложение F — см. ниже)
            </li>
            <li>
              Проверьте корректность проделанных настроек: Processing — Start I/O Assignment
              Analysis. При запуске анализа назначений ввода‑вывода Quartus автоматически
              переключится на основное окно программы, где в уже знакомых окнах «Tasks» и «Messages»
              будут отображены прогресс и результат выполнения анализа.
            </li>
          </ol>
        </Foldable>
        <Foldable header="Приложение F. FPGA DE1-SoC Contacts">
          <h3>Тумблеры (switches)</h3>
          <p>
            В качестве элементов ввода в ПЛИС DE1-SoC могут использоваться 10 тумблеров (switches).
            Верхнее положение тумблера – логическая «1», нижнее – логический «0».
          </p>
          {/* TABLE */}

          <h3>Кнопки (keys)</h3>
          <p>
            В качестве элементов ввода в ПЛИС DE1-SoC могут использоваться 4 кнопки (buttons).
            Нажатое состояние кнопки – логический «0», отжатое – «1».
          </p>
          {/* TABLE */}

          <h3>Светодиоды (leds)</h3>
          <p>
            Для отображения информации могут использоваться 10 светодиодов (LED). Логическая "1" -
            светодиод светится.
          </p>
          {/* TABLE */}

          <h3>Тактовая частота (clock)</h3>
          <p>
            DE1-SoC располагает четырьмя основными источниками тактовой частоты 50 МГц — сигнала в
            форме меандра.
          </p>
          {/* TABLE */}

          <h3>Семисегментные индикаторы (hexs)</h3>
          <p>
            Для отображения информации могут использоваться 6 семисегментных индикаторов (Seven
            Segment Digit). Логическая «1» на входе контакта семисегментного индикатора –
            соответствующий сегмент погашен, логический «0» – активен. Точка (dp) на индикаторе
            имеется, но не используется.
          </p>
          <img src="" alt="" />
          {/* TABLE */}
        </Foldable>
        <Foldable
          header="Приложение G. Загрузка конфигурации в FPGA отладочной платы DE1-SoC"
          id="safety">
          <h3>Безопасность при работе с отладочной платой</h3>
          <p>
            При работе с отладочной платой необходимо получить от преподавателя указания по технике
            безопасности при работе с электрооборудованием и отладочными платами.
          </p>
          <p>Основные положения:</p>
          <ul>
            <li>Использовать отладочную плату только на чистом столе и в устойчивом положении;</li>
            <li>
              Не размещать на отладочной плате и под отладочной платой какие-либо предметы, в том
              числе бумажные изделия;
            </li>
            <li>
              Не поднимать отладочную плату с поверхности, пока она включена во избежание поражения
              электрическим током и выведения из строя отладочной платы
            </li>
            <li>
              Производить манипуляции с отладочной платой чистыми сухими руками во избежание
              поражения электрическим током и выведения из строя отладочной платы;
            </li>
            <li>
              Не дотрагиваться до элементов отладочной платы (за исключением тумблеров, кнопок и
              защитного стекла), в т. ч. поверхностей платы, во избежание поражения электрическим
              током и выведения ее из строя;
            </li>
            <li>
              Подключать кабели к отладочной плате только в выключенном состоянии, крепко удерживая
              подключаемые кабели. При подключении кабелей отладочная плата должна располагаться на
              поверхности стола в устойчивом положении.
            </li>
          </ul>

          <h3>Загрузка конфигурации в FPGA отладочной платы DE1-SoC</h3>
          <ol>
            <li>
              Изучите{' '}
              <a href="#safety">основные положения безопасности при работе с отладочной платой</a>.
            </li>
            <li>
              Подключите <b>DE1-SoC</b>:{' '}
              <ul>
                <li>Включите кабель питания в сеть электропитания (розетку), </li>
                <li>Подключите кабель питания в соответствующее гнездо на DE1-SoC,</li>
                <li>Подключите USB-кабель в USB-порт компьютера, </li>
                <li>Подключите USB-кабель в соответствующее гнездо на DE1-SoC.</li>
              </ul>
            </li>
            <li>
              Включите DE1-SoC, нажав <b>красную кнопку</b>.
            </li>
            <li>Откройте программатор.</li>
            <li>
              В окне <i>Programmer</i> нажмите <b>Hardware Setup</b>. Дважды щелкните ЛКМ на DE1-SoC
              в таблице
              <i>Available hardware items</i> окна <i>Hardware Setup</i>. Нажмите <b>Close</b>.
            </li>
            <li>
              Нажмите <b>Auto Detect</b>. Выберите <b>5CSEMA5</b>. Нажмите <b>OK</b>.
            </li>
            <li>В нижнем рабочем поле окна Programmer выберите правую из двух появившихся схем.</li>
            <li>
              Нажмите кнопку <b>Change File…</b>
            </li>
            <li>
              Выберите файл с расширением .<i>sof</i> в папке <i>output_files</i> данного проекта.
              Имя файла совпадает с названием проекта. Нажмите <b>Open</b>.
            </li>
            <li>
              Установите <b>галочку</b> в столбце <i>Program/Configure</i> верхнего рабочего поля
              окна <i>Programmer</i>
              <b>напротив выбранного файла</b> <i>sof</i>.
            </li>
            <li>
              Нажмите кнопку <b>Start</b>.
            </li>
            <li>
              По окончании работы отключите DE1-SoC, нажав <b>красную кнопку</b> и отключив кабели
              сначала от DE1-SoC, затем из гнезда USB и розетки.{' '}
            </li>
          </ol>
        </Foldable>
      </div>
    </div>
  );
}

export default PromtM;
