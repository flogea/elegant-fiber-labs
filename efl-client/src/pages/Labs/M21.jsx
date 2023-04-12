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

function M21() {
  const lab_name = 'M21';
  const Subject = 'Вычислительная техника';
  const LabName = 'М21 ЗАЩЕЛКИ И ТРИГГЕРЫ (LATCH, FF)';
  const LabLink = 'ъыъ.рф/ьАЬЕ';

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
              .get('/api/labs/m21GetFiles/' + currentId + '/' + counter, { responseType: 'blob' })
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
    await axios.get('/api/labs/m21save/' + currentId).then((res) => {
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

    console.log(Array.from(formData));

    await axios
      .post('api/labs/m21save', formData, {
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
        .post('/api/labs/m21', formData, {
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
              <p>
                Триггеры (Flip-flops) относятся к группе цифровых устройств «последовательностные
                цифровые устройства», поскольку в схеме триггера присутствуют обратные связи. Так
                как триггер является конечным автоматом, при рассмотрении принципов его работы будем
                оперировать понятием «состояние» — устойчивое положение прямого выхода. При этом
                уровень на прямом выходе должен подтверждаться его инверсией на инверсном выходе.
              </p>

              <h3>Асинхронный RS-триггер (RSFF)</h3>
              <p>
                Исторически первым был изобретен асинхронный RS-триггер. Построить данный триггер
                можно двумя способами: используя два элемента 2И-НЕ или два элемента 2ИЛИ-НЕ.
              </p>
              <p>Вспомним принципы работы логических элементов 2И-НЕ и 2ИЛИ-НЕ:</p>

              {/* picture */}

              <p>
                Если на один из входов логического элемента 2И-НЕ будет подан логический 0, то выход
                будет однозначно определен и равен логической 1.
              </p>
              <p>
                Если на один из входов логического элемента 2И-НЕ будет подана логическая 1, то
                выход будет определяться вторым входом.
              </p>
              <p>
                Если на один из входов логического элемента 2ИЛИ-НЕ будет подана логическая 1, то
                выход будет однозначно определен и равен логическому 0.
              </p>
              <p>
                Если на один из входов логического элемента 2ИЛИ-НЕ будет подан логический 0, то
                выход будет определяться вторым входом.
              </p>
              <p>
                Схема асинхронного RS-триггера образуется обратными связями. Именно этот факт
                является признаком последовательностной логики.
              </p>

              {/* picture */}

              <p>
                В зависимости от типа используемых элементов активными уровнями триггера являются
                соответственно нули и единицы. В дальнейшем будем рассматривать асинхронные
                RS-триггеры, управляемые нулями.
              </p>

              {/* picture */}

              <p>
                Таким образом, при подаче нуля на вход S (Set — установка) состояние триггера
                становится 1, т. е. триггер устанавливается, а при подаче нуля на вход R (Reset —
                сброс) состояние триггера становится 0, т. е. триггер сбрасывается. При
                одновременной подаче нулей на оба входа обратная связь разрывается, уровни на обоих
                выходах становятся 1, т. е. прямой выход не подтверждается своей инверсией, и такое
                состояние триггера называется запрещенным. При отсутствии сигналов, т. е. нулей, на
                входах триггер удерживает свое состояние за счет обратных связей — хранение.
              </p>

              {/* table */}
              {/* picture */}

              <p>
                Обращая внимание на временные диаграммы работы асинхронного RS-триггера, можно
                заметить, что смена состояния триггера (уровней выходных сигналов) производится по
                спадам сигналов R и S. Соответственно, данное условие будет отражено на Verilog в
                виде блока always.
              </p>

              {/* code */}

              <h3>D-защелка (D-Latch)</h3>
              <p>
                RS-триггер неудобен из-за необычного поведения, если на оба входа триггера
                одновременно поступает низкий уровень сигнала. Более серьезная проблема состоит в
                том, что вопросы ЧТО и КОГДА в контексте изменения состояния триггера объединены его
                R и S входами. Подача логического нуля на эти входы определяет не только, ЧТО
                произойдет, но и КОГДА это произойдет. Разработка схем упрощается, если эти вопросы
                ЧТО и КОГДА разделены. D-защелка решает эти проблемы. У триггера есть два входа:
                вход данных D, определяющий, каким будет следующее состояние, и вход тактового
                сигнала C, определяющий, когда оно изменится. Состояние D-защелки изменяется
                непрерывно, пока C = 1.
              </p>

              {/* picture */}
              {/* picture */}

              <p>
                При описании D-защелки на Verilog условия для R и S сохраняются, при этом
                добавляется условие записи информации в триггер (C = 1):
              </p>

              {/* code */}

              <h3>D-триггер (DFF)</h3>
              <p>
                Основное отличие DFF от D-Latch состоит в типе синхронизации. В D-триггере
                информация записывается по фронту (в момент перехода от 0 к 1) сигнала C.
              </p>
              <p>Нормальный режим работы - по фронту C информация с D записывается на Q</p>

              {/* formula */}

              <p>При активных установочных сигналах синхронизация игнорируется:</p>

              {/* formula */}
              {/* formula */}
              {/* picture */}

              <p>Рассмотрим поведение D-триггера на временной диаграмме.</p>

              {/* picture */}

              <p>
                При описании D-триггера на Verilog условия для R и S сохраняются, при этом
                добавляется условие записи информации в триггер (C ↑):
              </p>

              {/* code */}

              <h3>JK-триггер (JKFF)</h3>
              <p>
                JK-триггер является наиболее универсальным триггером: он сочетает в себе свойства
                установочного триггера и триггера-переключателя. Данный триггер наиболее удобен для
                построения счетчиков.
              </p>
              <p>
                В отличие от D-триггера, при рассмотрении функционирования JK-триггера необходимо
                рассматривать комбинацию J (Jump) и K (Kill). В зависимости от этого триггер будет
                вести себя по-разному.
              </p>

              {/* table */}
              {/* picture */}

              <p>Рассмотрим поведение JK-триггера на временной диаграмме.</p>

              {/* picture */}

              <p>
                JK-триггер описывается аналогично D-триггеру, но в этом случае необходимо
                рассмотреть комбинации J и K:
              </p>

              {/* code */}
              <p>что сводится к более простому описанию:</p>
              {/* code */}

              <h3>T-триггер (TFF)</h3>
              <p>
                T-триггер изменяет свое состояние на противоположное в момент прихода фронта сигнала
                синхронизации. Может быть построен на D-триггере с замыканием инверсного выхода на
                информационный вход, на JK-триггере с постоянное подачей J = K = 1. У T-триггера
                часто присутствует вход T, при логической единице на котором каждый фронт сигнала
                синхронизации T-триггер переходит в противоположное состояние, а при нуле –
                сохраняется. В этом случае J = K = T.
              </p>

              {/* picture */}

              <p>Рассмотрим поведение T-триггера на временной диаграмме.</p>
              {/* picture */}

              <p>
                На Verilog T-триггер описывается аналогично D-триггеру, однако, если J = K = T, то
              </p>
              {/* code */}

              <h3>Поведенческий блок always</h3>
              <p>Ранее были рассмотрены примеры с непрерывным назначением (ассоциированием):</p>
              {/* code */}

              <p>
                Непрерывные назначения весьма полезны, однако в ряде случаев ими не ограничивается
                описание модулей.
              </p>
              <p>
                Verilog HDL помимо постоянных значений имеет и поведенческую реализацию с помощью
                поведенческих блоков (блоков always). Эти блоки позволяют выразить алгоритм работы
                устройства так, чтобы он выглядел как последовательность действий, при этом в
                аппаратуре в конечном счете это будет не всегда так.
              </p>
              <p>Для описания поведенческих блоков используется синтаксис:</p>
              {/* code */}

              <p>
                &lt;sensitivity_list&gt; (список чувствительностей) – это список всех входных
                сигналов, к которым чувствителен блок. Это список входных сигналов, изменение
                которых влияет выходные сигналы этого блока. "Always" переводится как "всегда".
                Такую запись можно прочитать вот так: "Всегда выполнять выражения &lt;statements&gt;
                при изменении сигналов, описанных в списке чувствительности &lt;sensitivity
                list&gt;".
              </p>
              <p>
                Такой блок может быть полезен при обработке условий, например, "по фронту сигнала
                clk". В этом случае начало описания блока always будет следующее:
              </p>
              {/* code */}

              <p>То есть содержимое блока always будет исполняться только по фронту сигнала clk.</p>
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                NB! В теле блока always операции присваивания для цепей wire запрещены.
              </p>

              <h3>Присваивание в Verilog HDL</h3>
              <p>
                В Verilog HDL существует три вида присваивания: непрерывное, блокирующее и
                неблокирующее.
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Непрерывное присваивание</span> на самом деле
                всегда развертывается в комбинаторную схему. Непрерывное присваивание может
                встречаться в операторе assign, либо же прямо в декларации сигнала wire. Левой
                частью всегда является сигнал, правой — выражение, использующее любые другие
                сигналы. Значения регистровых переменных тоже являются сигналами.
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Неблокирующее присваивание</span> означает, что
                ко входу регистра в левой части присваивания подключается выход комбинаторной схемы,
                описываемой в правой части выражения. Собственно момент записи определяется списком
                чувствительности в блоке always, обычно это фронт тактирующего сигнала. Следует
                знать, что все операторы неблокирующего присваивания внутри одного блока always
                выполняются одновременно, а условия, определяющие произойдут присваивания или нет,
                определяются заранее. К моменту присваивания, обычно это фронт тактирующего сигнала,
                все используемые в выражениях сигналы должны иметь установившиеся значения. В
                противном случае результат выполнения операции может быть непредсказуемым.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Непрерывное присваивание реализуется в assign оператором =.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Блокирующее присвоение реализуется в always оператором =&gt;.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Неблокирующее присвоение реализуется в always оператором =.
              </p>
              <p>Иллюстрации, показывающих различия в видах присвоения:</p>

              {/* block of pictures */}
            </Foldable>
          </div>

          <div className="completing">
            <div className="left-text">
              <h3>Выполнение работы</h3>
              <p>1 Запустите Quartus II 15.0.</p>
              <p>2 Создайте проект Lab_M21.</p>

              <h3>Модуль rs_ff — асинхронный RS-триггер</h3>
              <p>
                3 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  rs_ff.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>4 Опишите проектируемый модуль rs_ff на Verilog HDL, дополнив код:</p>

              {/* code */}

              <InputWithPreview num={1} ext="v" />

              <p>5 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>6 Получите и изучите RTL-схему модуля.</p>
              <p>7 Сохраните RTL-схему в pdf.</p>

              {/* file pdf */}
              <InputWithPreview num={2} ext="pdf" />

              <p>
                8 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>rs_ff</span>. В качестве входных данных
                используйте следующее:
              </p>
              <ul>
                <li>R — случайный, с шагом 8 нс;</li>
                <li>S — случайный, с шагом 12 нс;</li>
              </ul>
              <p>9 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс.</p>

              {/* file png */}
              <InputWithPreview num={3} ext="png" />

              <h3>Модуль d_latch — D-защелка</h3>
              <p>
                10 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  d_latch.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                11 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>d_latch</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={4} ext="v" />

              <p>12 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>13 Получите и изучите RTL-схему модуля.</p>
              <p>14 Сохраните RTL-схему в pdf.</p>

              {/* file pdf */}
              <InputWithPreview num={5} ext="pdf" />

              <p>
                15 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>d_latch</span>. В качестве входных
                данных используйте следующее:
              </p>
              <ul>
                <li>R — всегда 1, кроме промежутков 5-10 нс, 150-160 нс (0);</li>
                <li>S — всегда 1, кроме промежутка 40-45 нс (0);</li>
                <li>
                  C — тактирующий сигнал с периодом 10 нс, коэффициентом заполнения 75 %, задержкой
                  2,5 нс.
                </li>
                <li>D — случайный с шагом 6 нс.</li>
              </ul>
              <p>16 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс.</p>

              {/* file png */}
              <InputWithPreview num={6} ext="png" />

              <h3>Модуль d_ff — D-триггер</h3>
              <p>
                17 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  d_ff.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                18 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>d_latch</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={7} ext="v" />

              <p>19 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>20 Получите и изучите RTL-схему модуля.</p>
              <p>21 Сохраните RTL-схему в pdf.</p>

              {/* file pdf */}
              <InputWithPreview num={8} ext="pdf" />

              <p>
                22 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>d_ff</span>. В качестве входных данных
                используйте следующее:
              </p>
              <ul>
                <li>R — всегда 1, кроме промежутков 5-10 нс, 150-160 нс (0);</li>
                <li>S — всегда 1, кроме промежутка 40-45 нс (0);</li>
                <li>
                  C — тактирующий сигнал с периодом 10 нс, коэффициентом заполнения 75 %, задержкой
                  2,5 нс.
                </li>
                <li>D — случайный с шагом 6 нс.</li>
              </ul>
              <p>23 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс.</p>

              {/* file png */}
              <InputWithPreview num={9} ext="png" />

              <h3>Модуль jk_ff — JK-триггер</h3>
              <p>
                24 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  jk_ff.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                25 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>jk_ff</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={10} ext="v" />

              <p>26 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>27 Получите и изучите RTL-схему модуля.</p>
              <p>28 Сохраните RTL-схему в pdf.</p>

              {/* file pdf */}
              <InputWithPreview num={11} ext="pdf" />

              <p>
                Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>jk_ff</span>. В качестве входных данных
                используйте следующее:
              </p>
              <ul>
                <li>R — всегда 1, кроме промежутков 5-10 нс, 150-160 нс (0);</li>
                <li>S — всегда 1, кроме промежутка 40-45 нс (0);</li>
                <li>
                  C — тактирующий сигнал с периодом 10 нс, коэффициентом заполнения 75 %, задержкой
                  2,5 нс.
                </li>
                <li>J — случайный с шагом 6 нс.</li>
                <li>K — случайный с шагом 8 нс.</li>
              </ul>
              <p>30 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс.</p>

              {/* file png */}
              <InputWithPreview num={12} ext="png" />

              <h3>Модуль t_ff — T-триггер</h3>
              <p>
                31 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
                <span style={{ fontFamily: 'Ubuntu Mono', textDecoration: 'underline' }}>
                  t_ff.v
                </span>
                . Сделайте файл старшим в иерархии.
              </p>
              <p>
                32 Опишите проектируемый модуль{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>t_ff</span> на Verilog HDL, дополнив
                код:
              </p>

              {/* code */}
              <InputWithPreview num={13} ext="v" />

              <p>33 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
              <p>34 Получите и изучите RTL-схему модуля.</p>
              <p>35 Сохраните RTL-схему в pdf.</p>

              {/* file pdf */}
              <InputWithPreview num={14} ext="pdf" />

              <p>
                36 Произведите функциональную симуляцию модуля{' '}
                <span style={{ fontFamily: 'Ubuntu Mono' }}>t_ff</span>. В качестве входных данных
                используйте следующее:
              </p>
              <ul>
                <li>R — всегда 1, кроме промежутков 5-10 нс, 150-160 нс (0);</li>
                <li>S — всегда 1, кроме промежутка 40-45 нс (0);</li>
                <li>T — случайный, с шагом 20 нс;</li>
                <li>C — случайный, со случайным шагом.</li>
              </ul>
              <p>37 Сохраните результат симуляции в виде скриншота промежутка от 0 до 240 нс.</p>

              <InputWithPreview num={15} ext="png" />

              {withBoard ? <M21AdditionalBlock /> : null}
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

export default M21;
