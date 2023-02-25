import React from 'react';

import '../styles/Home.scss';

import SubjectCard from './SubjectCard';
import { Context } from '../Context';

const CardLab = ({ mat }) => {
  const { activeItem, labData } = React.useContext(Context);
  console.log(mat);
  return (
    <div className="subjBlock">
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
                    path={mat && mat ? name.path_m : name.path}
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
                  path={mat && mat ? name.path_m : name.path}
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
