import React from 'react';

function M12AdditionalBlock() {
  const [dataName, setDataName] = React.useState({
    file1png: '',
    file2png: '',
    file3png: '',
    file4png: '',
  });

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

        <div className="input-file png">
          <input
            type="file"
            name="file1png"
            onChange={(e) => setDataName({ ...dataName, file1png: e.target.files[0].name })}
            required="required"
            id="upload__input__png11"
            accept=".png"
          />
          <label htmlFor="upload__input__png11">Файл</label>
        </div>
        <span id="output__data1png" className="output__span">
          {dataName.file1png}
        </span>

        <div className="input-file png">
          <input
            type="file"
            name="file2png"
            onChange={(e) => setDataName({ ...dataName, file2png: e.target.files[0].name })}
            required="required"
            id="upload__input__png12"
            accept=".png"
          />
          <label htmlFor="upload__input__png12">Файл</label>
        </div>
        <span id="output__data2png" className="output__span">
          {dataName.file2png}
        </span>

        <div className="input-file png">
          <input
            type="file"
            name="file3png"
            onChange={(e) => setDataName({ ...dataName, file3png: e.target.files[0].name })}
            required="required"
            id="upload__input__png3"
            accept=".png"
          />
          <label htmlFor="upload__input__png3">Файл</label>
        </div>
        <span id="output__data3png" className="output__span">
          {dataName.file3png}
        </span>

        <div className="input-file png">
          <input
            type="file"
            name="file4png"
            onChange={(e) => setDataName({ ...dataName, file4png: e.target.files[0].name })}
            required="required"
            id="upload__input__png4"
            accept=".png"
          />
          <label htmlFor="upload__input__png4">Файл</label>
        </div>
        <span id="output__data4png" className="output__span">
          {dataName.file4png}
        </span>
      </>
    </div>
  );
}

export default M12AdditionalBlock;
