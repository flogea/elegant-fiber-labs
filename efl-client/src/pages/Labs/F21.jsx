import React from 'react';
import axios from 'axios';

import '../../styles/Labs.scss';

import F11tab from '../../components/Labs/F11tab';
import FooterLab from '../../components/Labs/FooterLab';
import HeaderLab from '../../components/Labs/HeaderLab';
import Performers from '../../components/Labs/Performers';
import f21Qr from '../../images/qr/f21.png';
import { Context } from '../../Context';

function F21() {
  const Subject = 'Фотоника';
  const LabName = 'Ф21 ВОЛОКОННО-ОПТИЧЕСКИЙ МОДУЛЯТОР ЗАТВОРНОГО ТИПА';
  const LabLink = 'ъыъ.рф/ЬУыу';
  const FColName = 'Напряжение, В';
  const SColName = 'Ток, мА';

  const labHandler = async () => {
    try {
      await axios
        .post(
          '/api/labs/f13',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <HeaderLab Qr={f21Qr} Subject={Subject} LabName={LabName} LabLink={LabLink} />
      <Performers />

      <div></div>

      <div className="footer">
        <FooterLab />
        <div className="row">
          <div className="centering">
            <button
              className="wawes-effect wawes-light btn btn-blue"
              onClick={labHandler}
              id="subm_btn">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F21;
