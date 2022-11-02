import React from 'react';

import '../styles/Home.scss';

import Categories from '../components/Categories';
import { FOFiOS, IntFot, NTS, OIS, OptInf, OptPrib, VychTeh } from '../components/Labs/labs_cards';
import { Context } from '../Context';

function Home() {
  const { activeItem } = React.useContext(Context);

  const renderSwitch = (activeItem) => {
    switch (activeItem) {
      case 'Фотоника':
        return (
          <>
            <FOFiOS />
            <OIS />
            <OptPrib />
            <OptInf />
            <IntFot />
          </>
        );

      case 'Направляющие телекоммуникационные системы':
        return (
          <>
            <NTS />
          </>
        );

      case 'Вычислительная техника':
        return (
          <>
            <VychTeh />
          </>
        );

      case null:
        return (
          <>
            <FOFiOS />
            <NTS />
            <OIS />
            <OptPrib />
            <OptInf />
            <IntFot />
            <VychTeh />
          </>
        );
    }
  };

  return (
    <>
      <div className="greeting"></div>
      <Categories
        items={['Фотоника', 'Направляющие телекоммуникационные системы', 'Вычислительная техника']}
      />
      {renderSwitch(activeItem)}
    </>
  );
}
export default Home;
