import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputWithPreview from './InputWithPreview';
import { setArray } from '../../redux/slices/ArraySlice';

function M13AdditionalBlock() {
  const [isBtnExist, setisBtnExist] = React.useState(true);
  const [isBtnEnterExist, setisBtnEnterExist] = React.useState(true);
  const [manualEntry, setManualEntry] = React.useState(false);

  const arrayOfNums = useSelector((state) => state.ArraySlice.someArray);

  React.useEffect(() => {
    if (arrayOfNums.length > 0) {
      setisBtnEnterExist(false);
      setisBtnExist(false);
    }
  }, []);

  const dispatch = useDispatch();

  function generateUniqueHexNumbers() {
    let numbers = new Set();
    while (numbers.size < 8) {
      let hexNumber = Math.floor(Math.random() * 16)
        .toString(16)
        .toUpperCase();
      numbers.add(hexNumber);
    }
    return Array.from(numbers);
  }

  return (
    <>
      <hr />
      <p>30 Выполните распиновку для модуля wrapper_sum, используя планировщик выводов:</p>
      <ul>
        <li>a[3:0] — тумблеры sw[3:0];</li>
        <li>b[3:0] — тумблеры sw[7:4]</li>
        <li>co — led[0];</li>
        <li>hex[6:0] — сегменты индикатора hex0[6:0].</li>
      </ul>
      <p>
        31 Выполните программирование отладочной платы, загрузив в нее битовый поток для модуля
        wrapper_sum.
      </p>
      <p>
        32 Проверьте правильность описания модулей, поочередно вводя данные с тумблеров и получая
        сумму чисел. Сохраните несколько состояний в виде фотографий (на фотографиях должны быть
        видны положения тумблеров, светодиоды, семисегментные индикаторы).
      </p>

      <div className="centeredInRow">
        {arrayOfNums < 10 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(setArray(generateUniqueHexNumbers()));
              setisBtnEnterExist(false);
              setisBtnExist(false);
            }}
            className="generate__btn">
            Сгенерировать
          </button>
        )}
        {arrayOfNums < 10 && (
          <button
            className="generate__btn hands"
            onClick={(e) => {
              e.preventDefault();
              setManualEntry(true);
              setisBtnEnterExist(false);
              setisBtnExist(false);
            }}>
            Ввести вручную
          </button>
        )}
      </div>

      <div className="blockWithInputs">
        <div className="inARow">
          <input type="text" value={'Число A'} readOnly />
          <input type="text" value={'Число B'} readOnly />
        </div>
        <div className="inARow">
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[0] || ''}
            readOnly={manualEntry ? false : true}
          />
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[1] || ''}
            readOnly={manualEntry ? false : true}
          />
          <InputWithPreview num="_1" ext="png" />
        </div>
        <div className="inARow">
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[2] || ''}
            readOnly={manualEntry ? false : true}
          />
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[3] || ''}
            readOnly={manualEntry ? false : true}
          />
          <InputWithPreview num="_2" ext="png" />
        </div>
        <div className="inARow">
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[4] || ''}
            readOnly={manualEntry ? false : true}
          />
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[5] || ''}
            readOnly={manualEntry ? false : true}
          />
          <InputWithPreview num="_3" ext="png" />
        </div>
        <div className="inARow">
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[6] || ''}
            readOnly={manualEntry ? false : true}
          />
          <input
            type="text"
            maxLength={1}
            value={arrayOfNums[7] || ''}
            readOnly={manualEntry ? false : true}
          />
          <InputWithPreview num="_4" ext="png" />
        </div>
      </div>

      <hr />
    </>
  );
}

export default M13AdditionalBlock;
