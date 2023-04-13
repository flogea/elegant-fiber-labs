import React from 'react';
import InputWithPreview from './InputWithPreview';
import PicAndLabel from '../../components/Labs/PicAndLabel';

function M23AdditionalBlock() {
  return (
    <>
      <hr />
      <h3>
        Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_cnt</span> — обертка для
        счетчиков
      </h3>
      <p>
        53 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
        <span>wrapper_cnt.v</span>. Сделайте файл старшим в иерархии.
      </p>
      <p>
        54 Опишите проектируемый модуль <span>wrapper_cnt</span> на Verilog HDL, дополнив код и
        описывая схему:
      </p>

      <PicAndLabel />
      {/* code */}

      <InputWithPreview num="_1" ext="v" />

      <p>55 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
      <p>56 Получите и изучите RTL-схему модуля.</p>
      <p>57 Сохраните RTL-схему в pdf.</p>

      <InputWithPreview num="_2" ext="pdf" />

      <p>
        58 Выполните распиновку для созданного модуля <span>wrapper_cnt</span>, используя
        планировщик выводов:
      </p>
      <ul>
        <li>
          <span>R</span> — тумблер sw[0];
        </li>
        <li>
          <span>en</span> — тумблер sw[1];
        </li>
        <li>
          <span>rev</span> — тумблер sw[2];
        </li>
        <li>
          <span>load</span> — тумблер sw[3];
        </li>
        <li>
          <span>addr[1:0]</span> — тумблеры sw[5:4];
        </li>
        <li>
          <span>D[3:0]</span> — тумблеры sw[9:6];
        </li>
        <li>
          <span>clk</span> — тактовая частота clock_50[0];
        </li>
        <li>
          <span>clk_btn</span> — кнопка key[0];
        </li>
        <li>
          <span>i7sout[6:0]</span> — сегменты индикатора hex0[6:0];
        </li>
        <li>
          <span>d7sout[6:0]</span> — сегменты индикатора hex1[6:0];
        </li>
        <li>
          <span>r7sout[6:0]</span> — сегменты индикатора hex2[6:0];
        </li>
        <li>
          <span>l7sout[6:0]</span> — сегменты индикатора hex3[6:0];
        </li>
      </ul>

      <p>59 Выполните полную сборку (компиляцию) проекта.</p>
      <p>
        60 Выполните программирование отладочной платы, загрузив в нее битовый поток модуля
        <span>wrapper_cnt</span>.
      </p>
      <p>
        61 Проверьте корректность разработанного модуля, изменяя входные сигналы и наблюдая за
        результатом.
      </p>
      <p>
        62 Сделайте несколько фотографий отладочной платы со значениями, указанными преподавателем.
      </p>

      <InputWithPreview num="_3" ext="png" />
      <hr />
    </>
  );
}

export default M23AdditionalBlock;
