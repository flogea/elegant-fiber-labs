import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputWithPreview from '../../components/Labs/InputWithPreview';
import { setFileName } from '../../redux/slices/fileNameSlice';

function M12AdditionalBlock({ receivedPhotos }) {
  const [randomArray, setRandomArray] = React.useState([]);
  const [manualEnter, setManualEnter] = React.useState(false);
  const [isBtnExist, setisBtnExist] = React.useState(true);
  const [isBtnEnterExist, setisBtnEnterExist] = React.useState(true);
  const [isInpExist, setisInpExist] = React.useState(false);

  const dataName = useSelector((state) => state.fileNameSlice);

  const dispatch = useDispatch();

  React.useEffect(() => {
    Object.values(receivedPhotos).forEach((element) => {
      if (element) {
        setisBtnEnterExist(false);
        setisBtnExist(false);
        setisInpExist(true);

        setRandomArray([
          receivedPhotos.output1,
          receivedPhotos.output2,
          receivedPhotos.output3,
          receivedPhotos.output4,
        ]);

        return;
      }
    });
  }, [receivedPhotos]);

  React.useEffect(() => {
    console.log(randomArray);
  }, [randomArray]);

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
    <>
      <hr />
      <p>
        11 Выполните распиновку для созданного модуля{' '}
        <span style={{ fontFamily: 'Ubuntu-Mono' }}>driver7seg</span>, используя планировщик
        выводов:
      </p>
      <ul>
        <li>bin[3:0] — тумблеры sw[3:0];</li>
        <li>hex[6:0] — сегменты индикатора hex0[6:0].</li>
      </ul>
      <p>
        {' '}
        12 Выполните полную сборку (компиляцию) проекта (Ctrl+L). По окончании сборки в каталоге
        проекта будет создана конфигурация c расширением <b>.sof</b>. Имя данного файла совпадает с
        названием проекта.
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
              readOnly="readonly"
              id="generatedInp1"
            />
          ))}
        <InputWithPreview ext="png" num="_1" />
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
              name="output2"
              className="oneCharacterInp"
              value={randomArray[1] || ''}
              readOnly="readonly"
              id="generatedInp2"
            />
          ))}
        <InputWithPreview ext="png" num="_2" />
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
              name="output3"
              className="oneCharacterInp"
              value={randomArray[2] || ''}
              readOnly="readonly"
              id="generatedInp3"
            />
          ))}
        <InputWithPreview ext="png" num="_3" />
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
              name="output4"
              className="oneCharacterInp"
              value={randomArray[3] || ''}
              readOnly="readonly"
              id="generatedInp4"
            />
          ))}
        <InputWithPreview ext="png" num="_4" />
      </div>
      <hr />
    </>
  );
}

export default React.memo(M12AdditionalBlock);
// export default M12AdditionalBlock;
