import React from 'react';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function NTS() {
  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
          <SubjectCard
            bigName="H11"
            subject="НТС"
            title="Н11 КОНСТРУКЦИИ ЭЛЕКТРИЧЕСКИХ НАПРАВЛЯЮЩИХ СИСТЕМ"
            path="/h11"
            cardStyle={'nts'}
          />
          <SubjectCard
            bigName="H21"
            subject="НТС"
            title="Н21 КОНСТРУКЦИИ ОПТИЧЕСКИХ НАПРАВЛЯЮЩИХ СИСТЕМ"
            path="/h21"
            cardStyle={'nts'}
          />
          <SubjectCard
            bigName="H821"
            subject="НТС"
            title="Н821 РЕФЛЕКТОГРАММЫ ОПТИЧЕСКИХ НАПРАВЛЯЮЩИХ "
            path="/h821"
            cardStyle={'nts'}
          />
        </div>
      </div>
    </div>
  );
}

export default NTS;
