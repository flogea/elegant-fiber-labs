import React from 'react';
import { Context } from '../../../Context';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function VychTeh() {
  const { activeItem } = React.useContext(Context);
  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
          {activeItem === null ? '' : <div className="subjTitle">Вычислительная техника</div>}
        </div>
      </div>
    </div>
  );
}

export default VychTeh;
