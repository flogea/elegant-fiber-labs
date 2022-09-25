import React from 'react';

import '../styles/Home.scss';

import SubjectCard from '../components/SubjectCard';

function Home() {
  return (
    <div className="inline">
      <SubjectCard
        bigName="Ф11"
        subject="Фотоника"
        title="Ф11 ЭЛЕКТРООПТИЧЕСКАЯ МОДУЛЯЦИЯ"
        path="/f11"
      />
      <SubjectCard
        bigName="Ф12"
        subject="Фотоника"
        title="Ф12 АКУСТООПТИЧЕСКАЯ МОДУЛЯЦИЯ"
        path="/f12"
      />
      <SubjectCard
        bigName="Ф13"
        subject="Фотоника"
        title="Ф13 ПРОСТРАНСТВЕННЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ"
        path="/f13"
      />
      <SubjectCard
        bigName="Ф14"
        subject="Фотоника"
        title="Ф14 СПЕКТРАЛЬНЫЕ ХАРАКТЕРИСТИКИ ИСТОЧНИКОВ ИЗЛУЧЕНИЯ"
        path="/f14"
      />
      <SubjectCard
        bigName="Ф15"
        subject="Фотоника"
        title="Ф15 РАСПРЕДЕЛЕНИЕ СВЕТА В ОПТИЧЕСКИХ ВОЛОКНАХ"
        path="/f15"
      />
    </div>
  );
}
export default Home;
