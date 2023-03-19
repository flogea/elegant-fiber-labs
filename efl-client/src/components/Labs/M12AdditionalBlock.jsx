import React from 'react';

function M12AdditionalBlock() {
  const [randomArray, setRandomArray] = React.useState([]);
  const [manualEnter, setManualEnter] = React.useState(false);
  const [isBtnExist, setisBtnExist] = React.useState(true);
  const [isBtnEnterExist, setisBtnEnterExist] = React.useState(true);
  const [isInpExist, setisInpExist] = React.useState(false);
  const [dataName, setDataName] = React.useState({
    file1png: '',
    file2png: '',
    file3png: '',
    file4png: '',
  });

  const randomSymbolGenerate = () => {
    const initialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    while (randomArray.length < 4) {
      const randomIndex = Math.floor(Math.random() * initialArray.length);
      if (randomArray.indexOf(initialArray[randomIndex]) === -1) {
        randomArray.push(initialArray[randomIndex]);
        setRandomArray(randomArray);
      }
    }
    setisBtnEnterExist(false);
    setisBtnExist(false);
    setisInpExist(true);
  };

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

        <div className="centeredInRow">
          {isBtnExist && (
            <button onClick={randomSymbolGenerate} className="generate__btn">
              Сгенерировать
            </button>
          )}
          {isBtnEnterExist && (
            <button
              className="generate__btn hands"
              onClick={() => {
                setManualEnter(true);
                setisBtnEnterExist(false);
                setisBtnExist(false);
                setisInpExist(true);
              }}>
              Ввести вручную
            </button>
          )}
        </div>

        <div className="centeredInRow" style={{ justifyContent: 'center' }}>
          <p className="outputWithSymbol">Вывод </p>
          {isInpExist &&
            (manualEnter ? (
              <input
                type="text"
                maxLength={1}
                name="output1"
                className="oneCharacterInp"
                id="manualInp1"
              />
            ) : (
              <input
                type="text"
                maxLength={1}
                name="output1"
                className="oneCharacterInp"
                value={randomArray[0] || ''}
                // disabled="disabled"
                readOnly="readonly"
                id="generatedInp1"
              />
            ))}
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
        </div>

        <div className="centeredInRow">
          <p className="outputWithSymbol">Вывод </p>
          {isInpExist &&
            (manualEnter ? (
              <input
                type="text"
                maxLength={1}
                name="output2"
                className="oneCharacterInp"
                id="manualInp2"
              />
            ) : (
              <input
                type="text"
                maxLength={1}
                name="output1"
                className="oneCharacterInp"
                value={randomArray[1] || ''}
                // disabled="disabled"
                readOnly="readonly"
                id="generatedInp2"
              />
            ))}
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
        </div>

        <div className="centeredInRow">
          <p className="outputWithSymbol">Вывод </p>
          {isInpExist &&
            (manualEnter ? (
              <input
                type="text"
                maxLength={1}
                name="output3"
                className="oneCharacterInp"
                id="manualInp3"
              />
            ) : (
              <input
                type="text"
                maxLength={1}
                name="output1"
                className="oneCharacterInp"
                value={randomArray[2] || ''}
                // disabled="disabled"
                readOnly="readonly"
                id="generatedInp3"
              />
            ))}
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
        </div>

        <div className="centeredInRow">
          <p className="outputWithSymbol">Вывод </p>
          {isInpExist &&
            (manualEnter ? (
              <input
                type="text"
                maxLength={1}
                name="output4"
                className="oneCharacterInp"
                id="manualInp4"
              />
            ) : (
              <input
                type="text"
                maxLength={1}
                name="output1"
                className="oneCharacterInp"
                value={randomArray[3] || ''}
                // disabled="disabled"
                readOnly="readonly"
                id="generatedInp4"
              />
            ))}
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
        </div>
      </>
    </div>
  );
}

export default M12AdditionalBlock;
