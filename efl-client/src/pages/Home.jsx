import React from 'react';
import axios from 'axios';

import '../styles/Home.scss';

import Categories from '../components/Categories';
import { Context } from '../Context';
import CardLab from '../components/CardLab';
import ParticlesBG from '../components/ParticlesBG';

function Home() {
  //console.log(mat);
  const { setLabData, darkMode } = React.useContext(Context);

  React.useEffect(() => {
    axios.get('/api/labs/labsInfo').then((resp) => {
      setLabData(resp.data.result);
    });
  }, [setLabData]);

  return (
    <>
      {darkMode ? <ParticlesBG /> : null}
      <Categories
        items={[
          'Физические основы фотоники и оптической связи',
          'Оптические измерительные системы',
          'Оптическое приборостроение',
          'Интегральная фотоника',
          'Оптическая информатика',
          'Направляющие телекоммуникационные системы',
          'Вычислительная техника',
          'Технологии разработки программного обеспечения',
          'Информационные технологии в редакционно-издательской деятельности',
        ]}
      />
      <CardLab />
    </>
  );
}
export default Home;
