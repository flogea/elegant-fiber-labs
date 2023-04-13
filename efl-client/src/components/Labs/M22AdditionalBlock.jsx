import React from 'react';
import InputWithPreview from './InputWithPreview';

function M22AdditionalBlock() {
  return (
    <>
      <hr />
      <h3>
        Модуль <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_rg</span> — обертка для регистров
      </h3>
      <p>
        45 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_rg.v</span>. Сделайте файл старшим в
        иерархии.
      </p>
      <p>
        46 Опишите проектируемый модуль{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_rg</span> на Verilog HDL, дополнив код и
        описывая схему:
      </p>

      {/* pic */}
      {/* code */}

      <InputWithPreview num="_1" ext="v" />

      <p>47 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
      <p>48 Получите и изучите RTL-схему модуля.</p>
      <p>49 Сохраните RTL-схему в pdf.</p>

      <InputWithPreview num="_2" ext="pdf" />

      <p>
        50 Выполните распиновку для созданного модуля{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_rg</span>, используя планировщик
        выводов:
      </p>
      <ul>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>R</span> — тумблер sw[9];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>S</span> — тумблер sw[8];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>clk</span> — кнопка key[3];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>D[3:0]</span> — тумблеры sw[3:0];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>wr</span> — тумблер sw[4];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>rd</span> — тумблер sw[5];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>p7sout[6:0]</span> — сегменты индикатора
          hex0[6:0];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>b7sout[6:0]</span> — сегменты индикатора
          hex1[6:0];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>psout</span> — светодиод ledr[0];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>sout</span> — светодиод ledr[1];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>spout[3:0]</span> — светодиоды ledr[5:2];
        </li>
        <li>
          <span style={{ fontFamily: 'Ubuntu Mono' }}>rout[3:0]</span> — светодиоды ledr[9:6].
        </li>
      </ul>
      <p>51 Выполните полную сборку (компиляцию) проекта.</p>
      <p>
        52 Выполните программирование отладочной платы, загрузив в нее битовый поток модуля{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_rg</span>.
      </p>
      <p>
        53 Проверьте корректность разработанного модуля, изменяя входные сигналы и наблюдая за
        результатом.
      </p>
      <p>
        54 Сделайте несколько фотографий отладочной платы со значениями, указанными преподавателем.
      </p>

      <InputWithPreview num="_3" ext="png" />
      <hr />
    </>
  );
}

export default M22AdditionalBlock;
