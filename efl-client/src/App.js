import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { Context } from './Context';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import { F11, F12, F13, F14, F15, Try } from './pages/Labs';
import AuthPage from './pages/AuthPage';
import F31 from './pages/Labs/F31';

function App() {
  const [performers, setPerformers] = React.useState({
    performers: '',
    group: '',
    email: '',
  });

  const [table1, setTable1] = React.useState({
    1: '',
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
    110: '',
    120: '',
    130: '',
    140: '',
    150: '',
    160: '',
    170: '',
    180: '',
    190: '',
    200: '',
    210: '',
    220: '',
    230: '',
    240: '',
    250: '',
    260: '',
    270: '',
    280: '',
    290: '',
    299: '',
  });

  const [table2, setTable2] = React.useState({
    1: '',
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
    110: '',
    120: '',
    130: '',
    140: '',
    150: '',
    160: '',
    170: '',
    180: '',
    190: '',
    200: '',
    210: '',
    220: '',
    230: '',
    240: '',
    250: '',
    260: '',
    270: '',
    280: '',
    290: '',
    299: '',
  });

  const [table3, setTable3] = React.useState({
    1: '',
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
    110: '',
    120: '',
    130: '',
    140: '',
    150: '',
    160: '',
    170: '',
    180: '',
    190: '',
    200: '',
    210: '',
    220: '',
    230: '',
    240: '',
    250: '',
    260: '',
    270: '',
    280: '',
    290: '',
    299: '',
  });

  const [table4, setTable4] = React.useState({
    1: '',
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
    110: '',
    120: '',
    130: '',
    140: '',
    150: '',
    160: '',
    170: '',
    180: '',
    190: '',
    200: '',
    210: '',
    220: '',
    230: '',
    240: '',
    250: '',
    260: '',
    270: '',
    280: '',
    290: '',
    299: '',
  });

  const [table12, setTable12] = React.useState({
    'ток, мкА': '',
    'Расстояние от плоскости лазера до модулятора, см': '',
    'Расстояние от модулятора до плоскости фотоприемника, см': '',
  });

  const [table12_1, setTable12_1] = React.useState({
    frequency: '',
    1_1: '',
    2_1: '',
    3_1: '',
    4_1: '',
    5_1: '',
    6_1: '',
    7_1: '',
    8_1: '',
    0.25: '',
    0.5: '',
    0.75: '',
    2_1: '',
    off: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    a: '',
    0.25_1: '',
    0.5_1: '',
    0.75_1: '',
    2_3: '',
    off_1: '',
  });

  const [table12_2, setTable12_2] = React.useState({
    frequency: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    0.25: '',
    0.5: '',
    0.75: '',
    2_1: '',
    off: '',
    1_1: '',
    2_2: '',
    3_1: '',
    4_1: '',
    5_1: '',
    6_1: '',
    7_1: '',
    8_1: '',
    a: '',
    0.25_1: '',
    0.5_1: '',
    0.75_1: '',
    2_3: '',
    off_1: '',
  });

  const [table12_3, setTable12_3] = React.useState({
    frequency: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    0.25: '',
    0.5: '',
    0.75: '',
    2_1: '',
    off: '',
    1_1: '',
    2_2: '',
    3_1: '',
    4_1: '',
    5_1: '',
    6_1: '',
    7_1: '',
    8_1: '',
    a: '',
    0.25_1: '',
    0.5_1: '',
    0.75_1: '',
    2_3: '',
    off_1: '',
  });

  const [photo, setPhoto] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const [secretKey, setSecretKey] = React.useState();

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
        }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/f11" element={<F11 />} />
            <Route path="/f12" element={<F12 />} />
            <Route path="/f13" element={<F13 />} />
            <Route path="/f14" element={<F14 />} />
            <Route path="/f15" element={<F15 />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
