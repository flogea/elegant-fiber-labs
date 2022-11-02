import React from 'react';
import { Context } from '../../../Context';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function OptInf() {
  const { activeItem } = React.useContext(Context);

  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
          {activeItem === null ? (
            ''
          ) : (
            <div className="subjTitle">
              ОПТИЧЕСКАЯ ИНФОРМАТИКА / ЦИФРОВАЯ ФОТОНИКА / ФУРЬЕ-ОПТИКА
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OptInf;
