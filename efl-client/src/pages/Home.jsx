import React from 'react';
import axios from 'axios';

import '../styles/Home.scss';

import Categories from '../components/Categories';
import { Context } from '../Context';
import CardLab from '../components/CardLab';

function Home() {
  const { activeItem, setLabData } = React.useContext(Context);

  React.useEffect(() => {
    axios.get('/api/labs/labsInfo').then((resp) => {
      setLabData(resp.data.result);
    });
  }, [setLabData]);

  return (
    <>
      <div className="greeting"></div>
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
      <CardLab activeItem={activeItem} />
    </>
  );
}
export default Home;
