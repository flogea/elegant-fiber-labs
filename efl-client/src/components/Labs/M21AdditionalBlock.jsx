import React from 'react';
import InputWithPreview from './InputWithPreview';

function M21AdditionalBlock() {
  return (
    <>
      <hr />
      <h3>Модуль wrapper_ff — обертка для триггеров</h3>
      <p>
        38 Создайте новый файл типа Verilog HDL File. Сохраните его под именем{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_ff.v</span>. Сделайте файл старшим в
        иерархии.
      </p>
      <p>
        39 Опишите проектируемый модуль{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_ff</span> на Verilog HDL, дополнив код и
        описывая схему:
      </p>

      {/* picture */}
      {/* code */}
      <InputWithPreview num="_1" ext="v" />

      <p>40 Выполните анализ и синтез проекта. Исправьте ошибки, если таковые имеются.</p>
      <p>41 Получите и изучите RTL-схему модуля.</p>
      <p>42 Сохраните RTL-схему в pdf.</p>

      {/* input pdf */}
      <InputWithPreview num="_2" ext="pdf" />

      <p>
        Выполните присвоение контактов для созданного модуля{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_ff</span>, используя планировщик
        выводов:
      </p>
      <ul>
        <li>R — тумблер sw[0];</li>
        <li>S — тумблер sw[1];</li>
        <li>C — тумблер sw[9];</li>
        <li>D — тумблер sw[2];</li>
        <li>J — тумблер sw[3];</li>
        <li>K — тумблер sw[4];</li>
        <li>T — тумблер sw[5];</li>
        <li>RSQ — светодиод ledr[0];</li>
        <li>RSnQ — светодиод ledr[1];</li>
        <li>DLQ — светодиод ledr[2];</li>
        <li>DLnQ — светодиод ledr[3];</li>
        <li>DQ — светодиод ledr[4];</li>
        <li>DnQ — светодиод ledr[5];</li>
        <li>TQ — светодиод ledr[6];</li>
        <li>TnQ — светодиод ledr[7];</li>
        <li>JKQ — светодиод ledr[8];</li>
        <li>JKnQ — светодиод ledr[9];</li>
      </ul>
      <p>44 Выполните полную сборку (компиляцию) проекта.</p>
      <p>
        45 Выполните программирование отладочной платы, загрузив в нее битовый поток модуля{' '}
        <span style={{ fontFamily: 'Ubuntu Mono' }}>wrapper_ff</span>.
      </p>
      <p>
        46 Проверьте корректность разработанного модуля, изменяя входные сигналы и наблюдая за
        результатом.
      </p>
      <hr />
    </>
  );
}

export default M21AdditionalBlock;
