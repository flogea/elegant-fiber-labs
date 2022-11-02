import React from 'react';
import { Context } from '../../../Context';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function OptPrib() {
  const { activeItem } = React.useContext(Context);

  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
          {activeItem === null ? '' : <div className="subjTitle">ОПТИЧЕСКОЕ ПРИБОРОСТРОЕНИЕ</div>}
          <SubjectCard
            bigName="Ф31"
            subject="Фотоника"
            title="Ф31 ДИФРАКЦИОННЫЕ РЕШЕТКИ"
            path="/f31"
            cardStyle={'f'}
          />
        </div>
      </div>
    </div>
  );
}

export default OptPrib;
