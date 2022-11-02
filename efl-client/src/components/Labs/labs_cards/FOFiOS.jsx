import React from 'react';
import { Context } from '../../../Context';

import '../../../styles/Home.scss';

import SubjectCard from '../../SubjectCard';

function FOFiOS() {
  return (
    <div className="subjBlock">
      <div className="inline">
        <div className="wrap">
          <SubjectCard
            bigName="Ф11"
            subject="Фотоника"
            title="Ф11 ЭЛЕКТРООПТИЧЕСКАЯ МОДУЛЯЦИЯ"
            path="/f11"
            cardStyle={'f'}
          />
          <SubjectCard
            bigName="Ф12"
            subject="Фотоника"
            title="Ф12 АКУСТООПТИЧЕСКАЯ МОДУЛЯЦИЯ"
            path="/f12"
            cardStyle={'f'}
          />
          <SubjectCard
            bigName="Ф13"
            subject="Фотоника"
            title="Ф13 ПРОСТРАНСТВЕННЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ"
            path="/f13"
            cardStyle={'f'}
          />
          <SubjectCard
            bigName="Ф14"
            subject="Фотоника"
            title="Ф14 СПЕКТРАЛЬНЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ"
            path="/f14"
            cardStyle={'f'}
          />
          <SubjectCard
            bigName="Ф15"
            subject="Фотоника"
            title="Ф15 РАСПРЕДЕЛЕНИЕ СВЕТА В ОПТИЧЕСКИХ ВОЛОКНАХ"
            path="/f15"
            cardStyle={'f'}
          />
        </div>
      </div>
    </div>
  );
}

export default FOFiOS;
