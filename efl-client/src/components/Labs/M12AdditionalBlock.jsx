import React from 'react';

function M12AdditionalBlock() {
  return (
    <div>
      <>
        <i>Онли для тех, кто воркает на плате :)</i>
        <p>
          11 Выполните распиновку для созданного модуля driver7seg, используя планировщик выводов:
        </p>
        <ul>
          <li>bin[3:0] — тумблеры sw[3:0];</li>
          <li>hex[6:0] — сегменты индикатора hex0[6:0].</li>
        </ul>
        <p>
          {' '}
          12 Выполните полную сборку (компиляцию) проекта (Ctrl+L). По окончании сборки в каталоге
          проекта будет создана конфигурация c расширением <b>.sof</b>. Имя данного файла совпадает
          с названием проекта.
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

        <div className="input-file">
          <input
            type="file"
            name="file2"
            // onChange={(e) => setDataName({ ...dataName, file2: e.target.files[0].name })}
            required="required"
            id="upload__input__pdf2"
            accept=".pdf"
          />
          <label htmlFor="upload__input__pdf2">Файл</label>
        </div>
        <span id="output__data2" className="output__span">
          {/* {dataName.file2} */}
        </span>

        <div className="input-file">
          <input
            type="file"
            name="file2"
            // onChange={(e) => setDataName({ ...dataName, file2: e.target.files[0].name })}
            required="required"
            id="upload__input__pdf2"
            accept=".pdf"
          />
          <label htmlFor="upload__input__pdf2">Файл</label>
        </div>
        <span id="output__data2" className="output__span">
          {/* {dataName.file2} */}
        </span>

        <div className="input-file">
          <input
            type="file"
            name="file2"
            // onChange={(e) => setDataName({ ...dataName, file2: e.target.files[0].name })}
            required="required"
            id="upload__input__pdf2"
            accept=".pdf"
          />
          <label htmlFor="upload__input__pdf2">Файл</label>
        </div>
        <span id="output__data2" className="output__span">
          {/* {dataName.file2} */}
        </span>

        <div className="input-file">
          <input
            type="file"
            name="file2"
            // onChange={(e) => setDataName({ ...dataName, file2: e.target.files[0].name })}
            required="required"
            id="upload__input__pdf2"
            accept=".pdf"
          />
          <label htmlFor="upload__input__pdf2">Файл</label>
        </div>
        <span id="output__data2" className="output__span">
          {/* {dataName.file2} */}
        </span>
      </>
    </div>
  );
}

export default M12AdditionalBlock;
