import React from 'react';
import { Context } from '../../../Context';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function OIS() {
  const { activeItem } = React.useContext(Context);

  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
          {activeItem === null ? (
            ''
          ) : (
            <div className="subjTitle">ОПТИЧЕСКИЕ ИЗМЕРИТЕЛЬНЫЕ СИСТЕМЫ</div>
          )}
          <SubjectCard
            bigName="Ф21"
            subject="Фотоника"
            title="Ф21 ВОЛОКОННО-ОПТИЧЕСКИЙ МОДУЛЯТОР ЗАТВОРНОГО ТИПА"
            path="/f21"
            cardStyle={'f'}
          />
          <SubjectCard
            bigName="Ф22"
            subject="Фотоника"
            title="Ф22 ВОЛОКОННО-ОПТИЧЕСКИЙ ВОЛЬТМЕТР ПЕРЕМЕННОГО НАПРЯЖЕНИЯ"
            path="/f22"
            cardStyle={'f'}
          />
          <SubjectCard
            bigName="Ф23"
            subject="Фотоника"
            title="Ф23 ВОЛОКОННО-ОПТИЧЕСКИЙ ДАТЧИК ТЕМПЕРАТУРЫ"
            path="/f23"
            cardStyle={'f'}
          />
        </div>
      </div>
    </div>
  );
}

export default OIS;
