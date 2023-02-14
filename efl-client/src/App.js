import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { Context } from './Context';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import { F11, F12, F13, F14, F15, F21, F22, M11, N11, N21 } from './pages/Labs';
import AuthPage from './pages/AuthPage';
import F11m from './pages/Materials/F11m';

function App() {
  const [activeItem, setActiveItem] = React.useState('Все');
  const [labData, setLabData] = React.useState();
  const [disabledInp, setDisabledInp] = React.useState(false);

  const [performers, setPerformers] = React.useState({
    performers: '',
    group: '',
    email: '',
  });

  const [table1, setTable1] = React.useState();

  const [table2, setTable2] = React.useState();

  const [table3, setTable3] = React.useState();

  const [table4, setTable4] = React.useState();

  const [table12, setTable12] = React.useState({
    'ток, мкА': '',
    'Расстояние от плоскости лазера до модулятора, см': '',
    'Расстояние от модулятора до плоскости фотоприемника, см': '',
  });

  const [table12_1, setTable12_1] = React.useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    table1: {
      0.25: '',
      0.5: '',
      0.75: '',
      2: '',
      Зашкаливает: '',
    },
    table2: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    },
    aopt: '',
    table3: {
      0.25: '',
      0.5: '',
      0.75: '',
      2: '',
      Зашкаливает: '',
    },
  });

  const [table12_2, setTable12_2] = React.useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    table1: {
      0.25: '',
      0.5: '',
      0.75: '',
      2: '',
      Зашкаливает: '',
    },
    table2: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    },
    aopt: '',
    table3: {
      0.25: '',
      0.5: '',
      0.75: '',
      2: '',
      Зашкаливает: '',
    },
  });

  const [table12_3, setTable12_3] = React.useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    table1: {
      0.25: '',
      0.5: '',
      0.75: '',
      2: '',
      Зашкаливает: '',
    },
    table2: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    },
    aopt: '',
    table3: {
      0.25: '',
      0.5: '',
      0.75: '',
      2: '',
      Зашкаливает: '',
    },
  });

  const [photo, setPhoto] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const [secretKey, setSecretKey] = React.useState();

  const [isEmpty, setEmpty] = React.useState(true);

  return (
    <>
      <Context.Provider
        value={{
          performers,
          setPerformers,
          table1,
          setTable1,
          table2,
          setTable2,
          table3,
          setTable3,
          table4,
          setTable4,
          photo,
          setPhoto,
          quantity,
          setQuantity,
          secretKey,
          setSecretKey,
          table12,
          setTable12,
          table12_1,
          setTable12_1,
          table12_2,
          setTable12_2,
          table12_3,
          setTable12_3,
          activeItem,
          setActiveItem,
          labData,
          setLabData,
          isEmpty,
          setEmpty,
          disabledInp,
          setDisabledInp,
        }}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home mat={false} />} />
            <Route path="/m11" element={<M11 />} />
            <Route path="/n11" element={<N11 />} />
            <Route path="/n21" element={<N21 />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
