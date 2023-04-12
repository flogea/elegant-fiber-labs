import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Context } from './Context';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import {
  F11,
  F12,
  F13,
  F14,
  F15,
  F21,
  F22,
  M11,
  M12,
  M13,
  M14,
  M21,
  M22,
  N11,
  N21,
  PromtM,
} from './pages/Labs';
import AuthPage from './pages/AuthPage';
import ParticlesBG from './components/ParticlesBG';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [darkMode]);

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
          darkMode,
          setDarkMode,
        }}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home mat={false} />} />
            <Route path="/f11" element={<F11 />} />
            {/* <Route path="/f12" element={<F12 />} /> */}
            <Route path="/f13" element={<F13 />} />

            <Route path="/m11" element={<M11 />} />
            <Route path="/m12" element={<M12 />} />
            <Route path="/m13" element={<M13 />} />
            <Route path="/m14" element={<M14 />} />
            <Route path="/m21" element={<M21 />} />
            <Route path="/m22" element={<M22 />} />

            <Route path="/n11" element={<N11 />} />
            <Route path="/n21" element={<N21 />} />
            <Route path="/promtm" element={<PromtM />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
