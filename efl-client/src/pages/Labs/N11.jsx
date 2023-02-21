import React, { useEffect } from 'react';
import axios from 'axios';

import { Context } from '../../Context';

import Performers from '../../components/Labs/Performers';
import HeaderLab from '../../components/Labs/HeaderLab';
import FooterLab from '../../components/Labs/FooterLab';
import n11Qr from '../../images/qr/n11.png';
import Foldable from '../../components/Labs/Foldable';
import CableExample from '../../components/Labs/CableExample';
import preloader from '../../images/Infinity.gif';
import eks097 from '../../images/eks097.png';
import sechenie from '../../images/sechenie.png';
import eks078 from '../../images/eks078.png';
import sechenie2 from '../../images/sechenie2.png';

import '../../styles/Labs.scss';
import Symmetric from '../../components/Labs/Symmetric';
import Coaxial from '../../components/Labs/Coaxial';
import Twisted from '../../components/Labs/Twisted';

function N11() {
  const lab_name = 'N11';
  const Subject = 'Направляющие телекоммуникационные системы';
  const LabName = 'Н11 КОНСТРУКЦИИ ЭЛЕКТРИЧЕСКИХ НАПРАВЛЯЮЩИХ СИСТЕМ';
  const LabLink = 'ъыъ.рф/уЬыА';

  const { performers, photo, quantity, secretKey } = React.useContext(Context);

  const [id_lab, setIdLab] = React.useState('');
  const [quantTables, setQuantTables] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSended, setIsSended] = React.useState(null);
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleRemove, setVisibleRemove] = React.useState(null);
  const [clicked, setClicked] = React.useState(0);
  const [symmetrical, setSymmetrical] = React.useState(null);
  const [coaxial, setCoaxial] = React.useState(null);
  const [twisted, setTwisted] = React.useState(null);

  const formRef = React.useRef();

  // React.useEffect(() => {
  //   const type = JSON.parse(localStorage.getItem('type'));
  //   if (type) {
  //     switch (type) {
  //       case 'Симметричный':
  //         setSymmetrical(true);
  //         setVisibleAdd(true);
  //         break;

  //       case 'Коаксиальный':
  //         setCoaxial(true);
  //         setVisibleAdd(true);
  //         break;

  //       case 'Витая пара':
  //         setTwisted(true);
  //         setVisibleAdd(true);
  //         break;
  //     }
  //   }

  //   const data = localStorage.getItem('quantTables');
  //   if (data) {
  //     //formRef.current.value = JSON.parse(data);
  //     setQuantTables(JSON.parse(data));
  //   }
  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem(testRef.current.name, testRef.current.value);
  //   console.log(testRef.current.name, testRef.current.value);
  //   console.log('up');
  // });

  React.useEffect(() => {
    for (var oneObj in formRef.current) {
      try {
        const dataType = formRef.current[oneObj].type;
        formRef.current[oneObj].value = JSON.parse(
          localStorage.getItem(formRef.current[oneObj].name),
        );
        //console.log(formRef.current[oneObj].value, formRef.current[oneObj].name);

        // if (
        //   dataType === 'text' ||
        //   dataType === 'email' ||
        //   dataType === 'number' ||
        //   dataType === 'textarea'
        // ) {
        //   formRef.current[oneObj].value = JSON.parse(
        //     localStorage.getItem(formRef.current[oneObj].name),
        //   );
        //   console.log(
        //     formRef.current[oneObj].value,
        //     JSON.parse(localStorage.getItem(formRef.current[oneObj].name)),
        //   );
        // }
      } catch (error) {}
    }
  }, []);

  // for (var oneObj in formRef.current) {
  //   try {
  //     const dataType = formRef.current[oneObj].type;
  //     if (
  //       dataType == 'text' ||
  //       dataType == 'email' ||
  //       dataType == 'number' ||
  //       dataType == 'textarea'
  //     ) {
  //       localStorage.setItem(formRef.current[oneObj].name, formRef.current[oneObj].value);
  //     }
  //   } catch (error) {}
  // }

  React.useEffect(() => {
    setIdLab(new Date().getTime());
  }, []);

  // React.useEffect(() => {
  //   const data = localStorage.getItem('quantTables');
  //   if (data) {
  //     setQuantTables(Object.entries(JSON.parse(data)));
  //   }
  // }, []);

  // const addTable = () => {
  //   setQuantTables(
  //     quantTables.concat(
  //       <CableExample n21={false} quantTable={quantTables.length} key={quantTables.length} />,
  //     ),
  //   );
  // };

  // const render = async () => {
  //   const num = localStorage.getItem('quantTables');
  //   console.log(num);
  //   for (let i = 0; i < num; i++) {
  //     await addTable();
  //     console.log(i);
  //   }
  // };

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

    // try {
    //   await axios
    //     .post('/api/labs/n11', formData, {
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
    //   setIsSended(false);
    // }
  };

  return (
    <div className="container">
      <HeaderLab Qr={n11Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <form ref={formRef}>
        <Performers />
        <div className="foldable__content">
          <Foldable header="Теоретические сведения">
            <h3>Конструктивные элементы электрических кабелей связи</h3>
            <p>
              Электрический кабель связи: кабельное изделие, содержащее одну или несколько
              изолированных электрических цепей, заключенных в оболочку, поверх которой может быть
              нанесен защитный покров.
            </p>
            <ol>
              <li>
                Сердечник – скрученные в определенном порядке изолированные проводники, образующие
                электрические цепи.
                <ul>
                  <li>
                    Токопроводящие жилы – медные (как правило) жилы диаметром 0,32, 0,4, 0,5, 0,64,
                    0,7 мм (городские), 0,9 и 1,2 мм (ВЧ). Могут использоваться многопроволочные
                    жилы. В коаксиальных кабелях цилиндрические трубки с продольным швом,
                    гофрированные или оплетенные.
                  </li>
                  <li>
                    Изоляция жил друг от друга:{' '}
                    <ul>
                      <li className="circled">Трубчатая (бумажная или пластиковая лента);</li>
                      <li className="circled">
                        Кордельная (спиральный кордель и тонкая лента поверх корделя)
                      </li>
                      <li className="circled">Сплошная (сплошной слой пластмассы);</li>
                      <li className="circled">Пористая (пористый слой полиэтилена);</li>
                      <li className="circled">
                        Баллонная (тонкостенная пластмассовая трубка, периодически или спирально
                        обжатая);
                      </li>
                      <li className="circled">Шайбовая (периодические диэлектрические шайбы).</li>
                    </ul>
                  </li>
                  <li>
                    Гидрофобный заполнитель:{' '}
                    <ul>
                      <li className="circled">Полное заполнение всего пространства компаундом;</li>
                      <li className="circled">
                        Периодическое заполнение в виде проволок из компаунда;
                      </li>
                      <li className="circled">
                        Нанесение сухого порошка (целлюлозы), набухающего при намокании;
                      </li>
                      <li className="circled">
                        Введение влагопоглощающих элементов в виде лент и корделей;
                      </li>
                    </ul>
                  </li>
                  <li>
                    Заполнитель:{' '}
                    <ul>
                      <li className="circled">
                        Сепаратор (поддержание формы кабеля и расстояния между парами)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Оболочка сердечника – непрерывная трубка, расположенная поверх сердечника с поясной
                изоляцией и экраном, предназначенная для защиты изолированных жил от влаги и других
                внешних воздействий.{' '}
                <ul>
                  <li>
                    Поясная изоляция – наложение поверх сердечника для укрепления и сохранения
                    формы, механической, тепловой защиты изоляции жил, увеличения электрической
                    прочности жил по отношению к экрану и оболочке, накладывается спирально с
                    перекрытием 10 – 50 % или продольно;
                  </li>
                  <li>
                    Электромагнитный экран – ленточная медная, алюминиевая или свинцовая оболочка;
                  </li>
                  <li>
                    Оболочка – непрерывная металлическая или пластмассовая трубка, расположенная
                    поверх сердечника с поясной изоляцией;
                  </li>
                </ul>
              </li>
              <li>
                Защитный покров.{' '}
                <ul>
                  <li>
                    Подушка – внутренняя часть, защита от коррозии, повреждений элементами брони;
                  </li>
                  <li>Броня – центральная часть покрова, защита от механических воздействий;</li>
                  <li>Бронепокров – защита стальной брони от коррозии;</li>
                  <li>Внешняя оболочка – полиэтиленовый шланг.</li>
                </ul>
              </li>
              <li>
                Силовые элементы{' '}
                <ul>
                  <li>Разделительный корд</li>
                  <li>
                    Центральные силовые элементы{' '}
                    <ul>
                      <li className="circled">
                        Сепаратор для поддержания формы кабеля и расстояния между парами
                      </li>
                    </ul>
                  </li>
                  <li>
                    Распределенные и выносные силовые элементы:{' '}
                    <ul>
                      <li>
                        Несущий трос – металлический канат для подвески на опорах (самонесущие
                        кабели)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>

            <h3>
              Классификация, основные параметры и размеры <sup>1</sup>
            </h3>
            <p>Кабели для цифровых систем передачи подразделяют по следующим категориям.</p>
            <ol>
              <li>
                По рабочему диапазону частот:{' '}
                <ul>
                  <li>
                    категории 1 – до 0,1 МГц, телефонный кабель, всего одна пара (в России
                    применяется кабель и вообще без скруток — «лапша» — у нее характеристики не
                    хуже, но больше влияние помех). В США использовался ранее, только в «скрученном»
                    виде. Используется только для передачи голоса или данных при помощи модема;
                  </li>
                  <li>
                    категории 2 – до 1 МГц, старый тип кабеля, 2 пары проводников, поддерживал
                    передачу данных на скоростях до 4 Мб/с, использовался в сетях Token ring и
                    Arcnet. Сейчас иногда встречается в телефонных сетях;
                  </li>
                  <li>
                    категории 3 – до 16 МГц, 4-парный кабель, используется при построении телефонных
                    и локальных сетей 10BASE-T и token ring, поддерживает скорость передачи данных
                    до 10 Мб/с или 100 МБит/с по технологии 100BASE-T4 на расстоянии не дальше 100
                    метров. В отличие от предыдущих двух, отвечает требованиям стандарта IEEE 802.3;
                  </li>
                  <li>
                    категории 4 – до 25 МГц, кабель состоит из 4 скрученных пар, использовался в
                    сетях token ring, 10BASE-T, 100BASE-T4, скорость передачи данных не превышает 16
                    Мб/с по одной паре, сейчас не используется;
                  </li>
                  <li>
                    категории 5 – до 100 МГц, 4-парный кабель, использовался при построении
                    локальных сетей 100BASE-TX и для прокладки телефонных линий, поддерживает
                    скорость передачи данных до 100 Мб/с при использовании 2 пар;
                  </li>
                  <li>
                    категории 5е – до 125 МГц, 4-парный кабель, усовершенствованная категория 5.
                    Скорость передач данных до 100 Мб/с при использовании 2 пар и до 1000 Мб/с при
                    использовании 4 пар. Кабель категории 5e является самым распространённым и
                    используется для построения компьютерных сетей;
                  </li>
                  <li>
                    категории 6<sub>А</sub> – до 250 МГц, применяется в сетях Fast Ethernet и
                    Gigabit Ethernet, состоит из 4 пар проводников и способен передавать данные на
                    скорости до 1000 Мб/с;
                  </li>
                  <li>
                    категории 6 – до 500 МГц, применяется в сетях Ethernet, состоит из 4 пар
                    проводников и способен передавать данные на скорости до 10 гигабит/с и
                    планируется использовать его для приложений, работающих на скорости до 40 Гб/с;
                  </li>
                  <li>
                    категории 7<sub>А</sub> – до 600 МГц, спецификация на данный тип кабеля
                    утверждена только международным стандартом ISO 11801, скорость передачи данных
                    до 100 Гб/с. Кабель этой категории имеет общий экран и экраны вокруг каждой
                    пары;
                  </li>
                  <li>категории 7 – до 1000 МГц;</li>
                </ul>
              </li>
              <li>
                По типу скрутки элементов:{' '}
                <ul>
                  <li>парной скрутки (TP);</li>
                  <li>четверочной скрутки (TQ);</li>
                </ul>
              </li>
              <li>
                По конструкции кабеля (в соответствии с международным стандартом ИСО/МЭК 11801):{' '}
                <ul>
                  <li>
                    U/UTP – кабели неэкранированные (кабели без общего экрана и без индивидуального
                    экрана по элементам скрутки);
                  </li>
                  <li>
                    F/UTP или S/UTP – кабели в общем экране из металлополимерной или металлической
                    ленты или фольги F, или оплетки из металлических проволок S (кабели в общем
                    экране и без индивидуального экрана по элементам скрутки);
                  </li>
                  <li>
                    SF/UTP – кабели в общем экране из металлополимерной или металлической ленты или
                    фольги F и оплетки из металлических проволок S (кабели в общем экране и без
                    индивидуального экрана по элементам скрутки);
                  </li>
                  <li>
                    U/FTP и U/STP или U/SFTP – кабели с отдельно экранированными элементами скрутки
                    без общего экрана;
                  </li>
                  <li>
                    S/FTP или SF/FTP, или S/STP, или SF/STP – кабели в общем экране с отдельно
                    экранированными элементами скрутки;
                  </li>
                  <li>
                    Примечание – в обозначениях кабелей четверочной скрутки допускается вместо
                    символа «Q» указывать символ «P»;
                    <br /> Маркировка витой пары представляет собой следующее
                    <br /> X/Y T Z - a x b x c<br /> где вместо X (общий экран) и Y (индивидуальный
                    экран) могут быть{' '}
                    <ul>
                      <li>U - Unshielded (неэкранированный);</li>
                      <li>S - Screened (экран в виде оплетки);</li>
                      <li>F - Foiled (экран в виде фольги);</li>
                      <li>SF - Screened & Foiled (комбинированный экран),</li>
                    </ul>
                    вместо Z{' '}
                    <ul>
                      <li>P - Pair (пара)</li>
                      <li>Q - Quad (четверка)</li>
                    </ul>
                    T - twisted (витая)
                    <br />
                    a - количество групп
                    <br />
                    b - размер группы (пара - P - Pair, четверка - Q - Quad)
                    <br />
                    с - диаметр жилы (мм)
                    <br />
                  </li>
                </ul>
              </li>
              <li>
                По конструкции токопроводящей жилы:{' '}
                <ul>
                  <li>однопроволочные;</li>
                  <li>многопроволочные;</li>
                </ul>
              </li>
              <li>
                По материалу оболочки:{' '}
                <ul>
                  <li>светостабилизированный полиэтилен PE;</li>
                  <li>поливинилхлоридный пластикат PVC;</li>
                  <li>поливинилхлоридный пластикат пониженной пожарной опасности PVC LS;</li>
                  <li>полимерная композиция, не содержащая галогенов ZH;</li>
                  <li>фторполимеры PTFE;</li>
                </ul>
              </li>
              <li>
                По области применения:{' '}
                <ul>
                  <li>в структурированных кабельных системах (СКС);</li>
                  <li>в сетях широкополосного доступа (ШПД);</li>
                </ul>
              </li>
              <li>
                По исполнению в части показателей пожарной безопасности:{' '}
                <ul>
                  <li>не распространяющие горение при одиночной прокладке (без обозначения);</li>
                  <li>
                    не распространяющие горение при групповой прокладке, с пониженным дымо- и
                    газовыделением нг (А, В, С, D)-LS:{' '}
                    <ul>
                      <li className="circled">по категории А – нг(A)-LS;</li>
                      <li className="circled">по категории В – нг(B)-LS;</li>
                      <li className="circled">по категории С – нг(C)-LS;</li>
                      <li className="circled">по категории D – нг(D)-LS;</li>
                    </ul>
                  </li>
                  <li>
                    не распространяющие горение при групповой прокладке и не выделяющие
                    коррозионно-активных газообразных продуктов при горении и тлении нг (A, B, C,
                    D)-HF:{' '}
                    <ul>
                      <li className="circled">по категории А – нг(A)-HF;</li>
                      <li className="circled">по категории В – нг(B)-HF;</li>
                      <li className="circled">по категории С – нг(C)-HF;</li>
                      <li className="circled">по категории D – нг(D)-HF;</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Номинальный диаметр однопроволочных и наружный диаметр многопроволочных токопроводящих
              жил кабелей для СКС должен быть от 0,5 до 0,65 мм, кабелей
            </p>
          </Foldable>
          <Foldable header="Примеры описания электрических кабелей">
            <div className="row">
              <img name="cable097" src={eks097} alt="" />
              <label htmlFor="cable097">Исследуемый образец кабеля – ЭКС-097</label>
            </div>
            <h4>Маркировка SF/UTP 24 AWG</h4>
            <ol>
              <li>
                Сердечник{' '}
                <ul>
                  <li>Токопроводящие жилы – медные проводники, ⌀0,64;</li>
                  <li>Изоляция жил – сплошная, ⌀1,5;</li>
                  <li>Группообразование – витая пара, однородная скрутка, шаг 14 мм;</li>
                  <li>Гидрофобный заполнитель отсутствует;</li>
                </ul>
              </li>
              <li>
                Оболочка сердечника{' '}
                <ul>
                  <li>Поясная изоляция полиэтиленовая пленка, наложенная спирально;</li>
                  <li>
                    Электромагнитный экран: спирально наложенный алюминиевый лист, алюминиевая
                    оплетка, индивидуальный экран отсутствует;
                  </li>
                  <li>Оболочка: полиэтиленовый шланг ⌀10;</li>
                </ul>
              </li>
              <li>Защитный покров отсутствует.</li>
              <li>Силовые элементы отсутствуют.</li>
            </ol>
            <div className="row">
              <img name="sechenie" src={sechenie} alt="" />
              <label htmlFor="sechenie">Поперечное сечение кабеля</label>
            </div>
            <hr />

            <div className="row">
              <img name="eks078" src={eks078} alt="" />
              <label htmlFor="eks078">Исследуемый образец кабеля – ЭКС-078</label>
            </div>
            <h4>Маркировка U/UTP …</h4>
            <ol>
              <li>
                Сердечник{' '}
                <ul>
                  <li>Токопроводящие жилы – медные проводники, ⌀0,64;</li>
                  <li>Изоляция жил – сплошная, ⌀1,5;</li>
                  <li>Группообразование – витая пара, однородная скрутка, шаг 14 мм;</li>
                  <li>Гидрофобный заполнитель отсутствует;</li>
                </ul>
              </li>
              <li>
                Оболочка сердечника{' '}
                <ul>
                  <li>Поясная изоляция полиэтиленовая пленка, наложенная спирально;</li>
                  <li>Электромагнитный экран отсутствует;</li>
                  <li>Оболочка: полиэтиленовый шланг ⌀12;</li>
                </ul>
              </li>
              <li>Защитный покров отсутствует.</li>
              <li>
                Силовые элементы{' '}
                <ul>
                  <li>Центральный силовые элементы отсутствуют;</li>
                  <li>Выносные силовые элементы – многожильный стальной трос ⌀1,25.</li>
                </ul>
              </li>
            </ol>
            <div className="row">
              <img name="sechenie2" src={sechenie2} alt="" />
              <label htmlFor="sechenie2">Поперечное сечение кабеля</label>
            </div>
          </Foldable>
        </div>

        <div className="completing">
          <div className="left-text">
            <h3>Выполнение работы</h3>
            <p>1 Получите у преподавателя несколько образцов электрических кабелей.</p>
            <p>2 Рассмотрите кабели по следующим параметрам</p>
            <p>Тип кабеля: </p>
            <div className="radios">
              <div className="radio__label">
                <input
                  type="radio"
                  name="typeof_cable"
                  id="type1"
                  value="Симметричный"
                  checked={symmetrical}
                  onChange={(e) => {
                    setSymmetrical(true);
                    setCoaxial(null);
                    setTwisted(null);
                    setVisibleAdd(true);
                    localStorage.setItem('type', JSON.stringify(e.target.value));
                  }}
                />
                <label htmlFor="type1">Симметричный</label>
              </div>
              <div className="radio__label">
                <input
                  type="radio"
                  name="typeof_cable"
                  id="type2"
                  value="Коаксиальный"
                  checked={coaxial}
                  onChange={(e) => {
                    setCoaxial(true);
                    setSymmetrical(null);
                    setTwisted(null);
                    setVisibleAdd(true);
                    localStorage.setItem('type', JSON.stringify(e.target.value));
                  }}
                />
                <label htmlFor="type2">Коаксиальный</label>
              </div>
              <div className="radio__label">
                <input
                  type="radio"
                  name="typeof_cable"
                  id="type3"
                  value="Витая пара"
                  checked={twisted}
                  onChange={(e) => {
                    setTwisted(true);
                    setCoaxial(null);
                    setSymmetrical(null);
                    setVisibleAdd(true);
                    localStorage.setItem('type', JSON.stringify(e.target.value));
                  }}
                />
                <label htmlFor="type3">Витая пара</label>
              </div>
            </div>
          </div>

          {quantTables &&
            Object.values(quantTables).map((value, key) =>
              //<CableExample n21={false} quantTable={key} key={key} />,
              symmetrical && symmetrical ? (
                <Symmetric key={key} quantTable={key} />
              ) : coaxial && coaxial ? (
                <Coaxial key={key} quantTable={key} />
              ) : twisted && twisted ? (
                <Twisted key={key} quantTable={key} />
              ) : null,
            )}
          <div className="row">
            <div className="col">
              {visibleAdd && (
                <button
                  className="add__remove add"
                  onClick={(e) => {
                    e.preventDefault();
                    setVisibleRemove(true);
                    // setClicked(clicked + 1);
                    if (quantTables.length < 4) {
                      setQuantTables([...quantTables, quantTables[quantTables.length - 1] + 1]);
                      localStorage.setItem('quantTables', JSON.stringify(quantTables));
                      if (quantTables.length === 3) {
                        setVisibleAdd(null);
                      }
                      console.log(quantTables[quantTables.length]);
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
                    // setClicked(clicked - 1);
                    setQuantTables(quantTables.slice(0, -1));
                    //setQuantTables(quantTables.filter(() => quantTables[-1]));
                    localStorage.setItem('quantTables', JSON.stringify(quantTables));

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
          {/* <button onClick={clearHandler}>Clear</button> */}
        </div>
      </div>
    </div>
  );
}

export default N11;
