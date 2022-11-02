import React from 'react';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function OptPrib() {
  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
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
