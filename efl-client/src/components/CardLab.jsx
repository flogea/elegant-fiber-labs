import React from 'react';

import '../styles/Home.scss';

import SubjectCard from './SubjectCard';
import { Context } from '../Context';

const CardLab = () => {
  const { activeItem, labData, darkMode } = React.useContext(Context);
  return (
    <div className={darkMode ? 'subjBlock dark' : 'subjBlock'}>
      <div className="inline">
        <div className="wrap">
          {activeItem !== 'Все'
            ? labData &&
              labData
                .filter((e) => e.subject === activeItem)
                .map((name, index) => (
                  <SubjectCard
                    bigName={name.name}
                    subject={name.discipline}
                    title={name.title}
                    path={name.path}
                    cardStyle={name.cardStyle}
                    key={`${name}_${index}`}
                  />
                ))
            : labData &&
              labData.map((name, index) => (
                <SubjectCard
                  bigName={name.name}
                  subject={name.discipline}
                  title={name.title}
                  path={name.path}
                  cardStyle={name.cardStyle}
                  key={`${name}_${index}`}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CardLab;
