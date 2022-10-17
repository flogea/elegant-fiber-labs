import React from 'react';

import '../../styles/Labs.scss';

function Header({ Qr, Subject, LabName, LabLink }) {
  return (
    <div className="row">
      <div className="col header">
        <div className="flex-image">
          <div className="qr">
            <img src={Qr} />
          </div>
        </div>
        <div className="lab-info">
          <div id="subject" className="main-text subject">
            {Subject}
          </div>
          <h1 id="labname" className="title">
            {LabName}
          </h1>
          <a href="ъыъ.рф/ыьеа" className="main-text">
            {LabLink}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
