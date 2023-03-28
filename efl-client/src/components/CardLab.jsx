import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/Home.scss';

import SubjectCard from './SubjectCard';
import { Context } from '../Context';

const CardLab = () => {
  const { activeItem, labData, darkMode } = React.useContext(Context);
  const searchValue = useSelector((state) => state.SearchSlice.searchInputValue);

  return (
    <div className={darkMode ? 'subjBlock dark' : 'subjBlock'}>
      <div className="inline">
        <div className="wrap">
          {activeItem !== 'Все'
            ? labData &&
              labData
                .filter((e) => e.subject === activeItem)
                .filter((e) => {
                  if (
                    e.discipline.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                    e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
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
              labData
                .filter((e) => {
                  if (
                    e.discipline.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                    e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((name, index) => (
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
