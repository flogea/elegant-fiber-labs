import React from 'react';

import '../../styles/Labs.scss';

function Header({ Qr, Subject, LabName, LabLink }) {
  return (
    <div className="header">
      {/* QR */}
      <div className="qr">
        <img src={Qr} />
      </div>

      {/* INFO */}
      <div className="lab-info">
        <div id="subject" className="subject">
          {Subject}
        </div>
        <h1 id="labname" className="title">
          {LabName}
        </h1>
        <a href={'http://' + LabLink} className="lab__link">
          {LabLink}
        </a>
      </div>
    </div>
  );
}

export default Header;
