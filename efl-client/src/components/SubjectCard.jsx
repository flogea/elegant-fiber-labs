import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.scss';

function SubjectCard({ bigName, subject, title, path, cardStyle }) {
  return (
    <Link to={path}>
      <div className={`home-card ${cardStyle}`}>
        <div className="card-big-name">{bigName}</div>
        <div className={`card-subject ${cardStyle}`}>{subject}</div>
        <div className={`card-title ${cardStyle}`}>{title}</div>
      </div>
    </Link>
  );
}

export default SubjectCard;
