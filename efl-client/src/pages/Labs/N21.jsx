import React from 'react';
import axios from 'axios';

import '../../styles/Labs.scss';

import { Context } from '../../Context';

import Performers from '../../components/Labs/Performers';
import HeaderLab from '../../components/Labs/HeaderLab';
import FooterLab from '../../components/Labs/FooterLab';
import n21Qr from '../../images/qr/n21.png';
import Foldable from '../../components/Labs/Foldable';
import preloader from '../../images/Infinity.gif';
import CableExample from '../../components/Labs/CableExample';
import oks097 from '../../images/oks097.png';
import sechenie3 from '../../images/sechenie3.png';
import oks078 from '../../images/oks078.png';
import sechenie4 from '../../images/sechenie4.png';
import oks098 from '../../images/oks098.png';
import sechenie5 from '../../images/sechenie5.png';

function N21() {
  const lab_name = 'N21';
  const Subject = 'Направляющие телекоммуникационные системы';
  const LabName = 'Н21 КОНСТРУКЦИИ ОПТИЧЕСКИХ НАПРАВЛЯЮЩИХ СИСТЕМ';
  const LabLink = 'ъыъ.рф/ЕАыЪ';

  const { performers, photo, quantity, secretKey } = React.useContext(Context);

  const [id_lab, setIdLab] = React.useState('');
  const [quantTables, setQuantTables] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);
  const [visibleAdd, setVisibleAdd] = React.useState(true);
  const [visibleRemove, setVisibleRemove] = React.useState(null);

  const formRef = React.useRef();

  React.useEffect(() => {
    setIdLab(new Date().getTime());
  }, []);

  const labHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    formData.append('lab_name', lab_name);
    formData.append('id_lab', id_lab);
    formData.append('token', secretKey.token);
    formData.append('photo', photo);
    formData.append('quantity', quantity.quantity);
    formData.append('quantTables', quantTables.length);

    console.log(Array.from(formData));

    try {
      await axios
        .post('/api/labs/n21', formData, {
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
      setIsSended(false);
    }
  };

  return (
    <div className="container">
      <HeaderLab Qr={n21Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <form ref={formRef}>
        <Performers />
        <div className="foldable__content">
          <Foldable header="Теоретическое описание">
            <h3>Конструктивные элементы оптических кабелей связи</h3>
            <p>
              Оптический кабель (ОК) представляет собой совокупность оптических волокон (ОВ),
              заключенных в общую влагозащитную оболочку, поверх которой в зависимости от условий
              эксплуатации могут быть наложены защитные покровы. Основной задачей ОК является
              обеспечение требуемого качества передачи при соответствующих условиях эксплуатации.
            </p>
            <p>
              Конструкции ОК в основном определяются назначением, областью применения и условиями
              прокладки и эксплуатации. По области применения ОК подразделяются на магистральные,
              зоновые, местные (городские и сельские), а также объектовые и монтажные. По назначению
              – на ОК для транспортных сетей и сетей доступа. По условиям прокладки и эксплуатации
              ОК различают кабели внутренней прокладки, наружной прокладки (подземные, подводные и
              подвесные), специальные кабели.
            </p>

            <ol>
              <li>
                Сердечник – часть кабеля, располагающая вдоль него оптические волокна особым
                образом:{' '}
                <ul>
                  <li>
                    Повивная конструкция – сердечник выполнен в виде повивов оптических модулей
                    (свободное трубчатое покрытие) вокруг центрального силового элемента (ЦСЭ). При
                    малом (менее 6) числе требующихся модулей для обеспечения устойчивой правильной
                    скрутки вместе с ними скручиваются пластмассовые кордели – заполнители сплошного
                    сечения (распределенные силовые элементы);
                  </li>
                  <li>
                    Профилированная конструкция – полипропиленовый стержень с продольными пазами.
                    Стержень отливается вокруг металлического или диэлектрического ЦСЭ. Пазы
                    располагаются вокруг стержня спирально или с периодической сменой направления.
                    Волокна или оптические модули свободно располагаются в пазах.{' '}
                  </li>
                  <li>
                    Одиночная (одномодульная) конструкция – пластмассовая (ПБТ) трубка, являющаяся
                    модулем, внутри которого располагаются оптические волокна.
                  </li>
                </ul>
              </li>
              <li>
                Оптическое волокно – оптические диэлектрические направляющие среды, имеющие
                волоконную структуру, предназначенные для канализации электромагнитных волн
                оптического и близкого к нему диапазона (ИК), состоящие из сердцевины, оболочки и
                первичного защитного покрытия. Диаметр оболочки всех телекоммуникационных ОВ
                стандартизован и составляет 125 ± 2 мкм. Первичное защитное покрытие наносится при
                вытяжке и защищает ОВ от воздействия окружающей среды. В качестве первичного
                покрытия применяют акрилат. После нанесения защитного покрытия диаметр ОВ становится
                равным 245 ± 10 мкм.
              </li>
              <li>
                Вторичное покрытие – элемент конструкции, предназначенный для защиты ОВ от
                механических и химических воздействий:{' '}
                <ul>
                  <li>
                    Сплошное (ПВХ). представляет собой толстый слой полимера (мягкий
                    поливинилхлорид), нанесенный непосредственно на волокно с первичным покрытием.
                    Диаметр ОВ в таком покрытии порядка 0,9 мм. Используется в кабелях внутренней
                    прокладки;
                  </li>
                  <li>
                    Полусвободное трубчатое (ПВХ, компаунд). Отличается от сплошного тем, что между
                    ОВ в первичном покрытии и слоем полимера находится тонкий слой (несколько сотых
                    долей мм) вязкого компаунда. Это облегчает снятие защитных покрытий перед
                    монтажом и уменьшает влияние микроизгибов. Используется в ОК внутренней
                    прокладки;
                  </li>
                  <li>
                    Свободное трубчатое (модульное) (ПБТ, компаунд) одноволоконное или
                    многоволоконное представляет собой пластмассовую трубку, заполненную вязким
                    гидрофобным компаундом, в котором свободно расположено ОВ. Используется в ОК
                    наружной прокладки;
                  </li>
                  <li>Ленточное.</li>
                </ul>
              </li>
              <li>
                Гидрофобный заполнитель:{' '}
                <ul>
                  <li>Полное заполнение всего пространства компаундом;</li>
                  <li>Периодическое заполнение в виде проволок из компаунда;</li>
                  <li>Нанесение сухого порошка (целлюлозы), набухающего при намокании;</li>
                  <li>Введение влагопоглощающих элементов в виде лент и корделей.</li>
                </ul>
              </li>
              <li>
                Оболочка сердечника – непрерывная трубка, расположенная поверх сердечника с поясной
                изоляцией, предназначенная для защиты сердечника от влаги и других внешних
                воздействий:{' '}
                <ul>
                  <li>
                    Поясная изоляция – наложение поверх сердечника для скрепления и сохранения
                    формы, накладывается спирально с перекрытием 10 – 50 % или продольно;
                  </li>
                  <li>
                    Оболочка – непрерывная металлическая или пластмассовая трубка, расположенная
                    поверх сердечника с поясной изоляцией;
                  </li>
                </ul>
              </li>
              <li>
                Защитный покров:{' '}
                <ul>
                  <li>
                    Броня – основная часть покрова, защита от механических воздействий. Обычно
                    выполняется в виде стальной гофрированной ленты или повивов круглой стальной
                    проволоки.
                  </li>
                  <li>Внешняя оболочка – полиэтиленовый шланг, покрывающий броню.</li>
                </ul>
              </li>
              <li>
                Силовые элементы:{' '}
                <ul>
                  <li>
                    Силовые элементы сердечника – элементы конструкции, предназначенные для
                    увеличения упругости при растяжениях и сгибах:{' '}
                    <ul>
                      <li>
                        Центральный силовой элемент (ЦСЭ) – вдоль центральной оси. Обычно
                        выполняется в виде стеклопластикового прутка или металлического троса. В
                        одномодульных сердечниках роль ЦСЭ выполняет сам модуль.
                      </li>
                      <li>
                        Распределенные силовые элементы (РСЭ) – расположенные распределенно по
                        сечению сердечника. Выполняются в виде пластмассовых корделей-заполнителей
                        или повива арамидных или стеклянных нитей;
                      </li>
                    </ul>
                  </li>
                  <li>
                    Выносные силовые элементы (ВСЭ) – элементы, находящиеся за пределами сердечника.{' '}
                    <ul>
                      <li>
                        Несущий трос – металлический канат для подвески на опорах (самонесущие
                        кабели).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>

            <h3>Классификация, основные параметры и размеры</h3>
            <ol>
              По области применения<sup>1</sup>:{' '}
              <ul>
                <li>
                  З – для подземной прокладки (в том числе в канализации, в трубах, в блоках,
                  коллекторах, в грунтах всех категорий, в воде при пересечении болот, озер и рек с
                  максимальной глубиной не более 10 м);
                </li>
                <li>
                  В – для воздушной прокладки (в том числе самонесущие с центральным силовым
                  элементом, самонесущие со смещенным силовым элементом в общем шланге, наматываемые
                  на провод или силовой элемент, подвесные, встроенные в провод или в силовой
                  элемент);
                </li>
                <li>
                  Г – для подводной прокладки с продольной и поперечной герметизацией (в том числе
                  через болота, озера и реки глубиной более 10 м, в морях и океанах, на прибрежных
                  участках рек, озер, морей и океанов);
                </li>
                <li>
                  Н – подводные негрузонесущие для подвижных объектов морской техники (в том числе
                  для внутриприборного монтажа, стационарной прокладки внутри отсеков, межотсечной
                  прокладки через переборки, забортной прокладки через герметизирующие устройства
                  высокого давления);
                </li>
                <li>
                  С – для прокладки внутри помещений и стационарных объектов (в том числе
                  распределительные, абонентские, станционные);
                </li>
                <li>М – монтажные;</li>
                <li>Ш – особо гибкие (шнуры);</li>
                <li>
                  Д – для дистанционного управления (в том числе прокладываемые в воздушной среде,
                  надводной и подводной средах, под землей);
                </li>
                <li>
                  Б – бортовые (для подвижных объектов) в воздушной, надводной и подводных средах;
                </li>
                <li>П – полевые для многократной прокладки;</li>
                <li>Ц – специального (целевого) назначения.</li>
              </ul>
            </ol>
          </Foldable>
          <Foldable header="Примеры описания оптических кабелей">
            <div className="row">
              <img name="oks097" src={oks097} alt="" />
              <label htmlFor="oks097">Исследуемый образец кабеля – ОКС-097</label>
            </div>
            <h4>Маркировка ДОС-П-08У(1х8) – 1 кН.</h4>
            <ol>
              <li>
                Сердечник{' '}
                <ul>
                  <li>
                    Оптические волокна – одномодовое волокно SMF 9/125, 8 волокон, защищены
                    акрилатным первичным покрытием;
                  </li>
                  <li>Вторичное покрытие – свободное трубчатое, оптический модуль, ⌀2;</li>
                  <li>Гидрофобный заполнитель – компаунд;</li>
                  <li>
                    Образование сердечника – одномодульный характер образования, 1 модуль по 8
                    оптических волокон;
                  </li>
                </ul>
              </li>
              <li>
                Оболочка сердечника{' '}
                <ul>
                  <li>Поясная изоляция отсутствует;</li>
                  <li>Оболочка сердечника отсутствует;</li>
                </ul>
              </li>
              <li>
                Защитный покров{' '}
                <ul>
                  <li>Броня – повив круглой стальной проволоки, ⌀7;</li>
                  <li>Внешняя оболочка – пластмассовая трубка, ⌀9;</li>
                </ul>
              </li>
              <li>
                Силовые элементы{' '}
                <ul>
                  <li>Центральный силовой элемент – оптический модуль;</li>
                  <li>Распределенные силовые элементы отсутствуют;</li>
                  <li>Выносные силовые элементы отсутствуют.</li>
                </ul>
              </li>
            </ol>
            <div className="row">
              <img name="sechenie3" src={sechenie3} alt="" />
              <label htmlFor="sechenie3">Поперечное сечение кабеля</label>
            </div>
            <hr />

            <div className="row">
              <img name="oks078" src={oks078} alt="" />
              <label htmlFor="oks078">Исследуемый образец кабеля – ОКС-078</label>
            </div>
            <h4>Маркировка ДПОм-П-08У(1х8) – 1,5 кН.</h4>
            <ol>
              <li>
                Сердечник{' '}
                <ul>
                  <li>
                    Оптические волокна – одномодовое волокно SMF 9/125, 8 волокон, защищены
                    акрилатным первичным покрытием;
                  </li>
                  <li>Вторичное покрытие – свободное трубчатое, оптический модуль, ⌀3;</li>
                  <li>Гидрофобный заполнитель – компаунд;</li>
                  <li>
                    Образование сердечника – одномодульный характер образования, 1 модуль по 8
                    оптических волокон;
                  </li>
                </ul>
              </li>
              <li>
                Оболочка сердечника{' '}
                <ul>
                  <li>Поясная изоляция отсутствует;</li>
                  <li>Оболочка сердечника – пластмассовая трубка ⌀7;</li>
                </ul>
              </li>
              <li>
                Защитный покров{' '}
                <ul>
                  <li>Броня отсутствует;</li>
                  <li>Внешняя оболочка – полиэтиленовая трубка, ⌀9, нанесена поверх ВСЭ;</li>
                </ul>
              </li>
              <li>
                Силовые элементы{' '}
                <ul>
                  <li>Центральный силовой элемент – оптический модуль;</li>
                  <li>Распределенные силовые элементы отсутствуют;</li>
                  <li>Выносной силовой элемент – многопроволочный стальной трос ⌀3.</li>
                </ul>
              </li>
            </ol>
            <div className="row">
              <img name="sechenie4" src={sechenie4} alt="" />
              <label htmlFor="sechenie4">Поперечное сечение кабеля</label>
            </div>
            <hr />

            <div className="row">
              <img name="oks098" src={oks098} alt="" />
              <label htmlFor="oks098">Исследуемый образец кабеля – ОКС-098</label>
            </div>
            <h4>Маркировка ДПТа-П-32У(4х8) – 2 кН.</h4>
            <ol>
              <li>
                Сердечник{' '}
                <ul>
                  <li>Оптические волокна – одномодовое волокно SMF 9/125, 32 волокна;</li>
                  <li>Вторичное покрытие – свободное трубчатое, оптический модуль, ⌀2;</li>
                  <li>Гидрофобный заполнитель – компаунд;</li>
                  <li>
                    Образование сердечника – повивный характер образования, 4 модуля по 8 оптических
                    волокон, два корделя;
                  </li>
                </ul>
              </li>
              <li>
                Оболочка сердечника{' '}
                <ul>
                  <li>Поясная изоляция отсутствует;</li>
                  <li>Оболочка сердечника – пластмассовая трубка ⌀12;</li>
                </ul>
              </li>
              <li>
                Защитный покров{' '}
                <ul>
                  <li>Броня отсутствует;</li>
                  <li>Внешняя оболочка отсутствует;</li>
                </ul>
              </li>
              <li>
                Силовые элементы{' '}
                <ul>
                  <li>Центральный силовой элемент – стеклопластиковый пруток, ⌀2;</li>
                  <li>
                    Распределенные силовые элементы – кордели в повиве сердечника, ⌀2, повив
                    арамидных нитей ⌀7;
                  </li>
                  <li>Выносной силовой элемент отсутствует.</li>
                </ul>
              </li>
            </ol>
            <div className="row">
              <img name="sechenie5" src={sechenie5} alt="" />
              <label htmlFor="sechenie5">Поперечное сечение кабеля</label>
            </div>
          </Foldable>
        </div>

        <div className="completing">
          <div className="left-text">
            <h3>Выполнение работы</h3>
            <p>1 Получите у преподавателя несколько образцов оптических кабелей.</p>
            <p>2 Рассмотрите кабели по следующим параметрам</p>
          </div>
          {quantTables}
          <div className="row">
            <div className="col">
              {visibleAdd && (
                <button
                  className="add__remove add"
                  onClick={(e) => {
                    e.preventDefault();
                    setVisibleRemove(true);
                    if (quantTables.length < 4) {
                      setQuantTables(
                        quantTables.concat(
                          <CableExample
                            n21={true}
                            quantTable={quantTables.length}
                            key={quantTables.length}
                          />,
                        ),
                      );
                      if (quantTables.length === 3) {
                        setVisibleAdd(null);
                      }
                      console.log(quantTables);
                    }
                  }}>
                  +
                </button>
              )}
              {visibleRemove && (
                <button
                  className="add__remove remove"
                  onClick={(e) => {
                    e.preventDefault();
                    setVisibleAdd(true);
                    setQuantTables(quantTables.slice(0, -1));
                    console.log(quantTables);
                    if (quantTables.length === 1) {
                      setVisibleRemove(null);
                    }
                  }}>
                  -
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
      <FooterLab needPhoto={true} />
      <div className="row">
        {isLoading ? <img src={preloader} className="preloader" /> : null}
        {isSended && (isSended ? 'Отправлено' : 'Ошибка')}
        <div className="centering">
          <button
            className="wawes-effect wawes-light btn btn-blue"
            onClick={labHandler}
            id="subm_btn">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default N21;
