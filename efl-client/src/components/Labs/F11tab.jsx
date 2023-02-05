import React from 'react';
import parse from 'html-react-parser';

import '../../styles/Labs.scss';

import TabComponent1 from './TabComponent1';
import TabComponent2 from './TabComponent2';
import TabComponent3 from './TabComponent3';
import TabComponent4 from './TabComponent4';

function F11tab({ FColName, SColName, array, research }) {
  const handleSwitch = (research) => {
    switch (research) {
      case '1':
        return <TabComponent1 array={array} />;
      case '2':
        return <TabComponent2 array={array} />;
      case '3':
        return <TabComponent3 array={array} />;
      case '4':
        return <TabComponent4 array={array} />;
    }
  };

  return (
    <div className="row">
      <div className="col s6">
        <label className="fname">{parse(FColName)}</label>
        <label className="sname">{parse(SColName)}</label>
      </div>
      {handleSwitch(research)}
    </div>
  );
}

export default F11tab;
