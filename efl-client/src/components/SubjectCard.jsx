import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.scss';

function SubjectCard({ bigName, subject, title, path }) {
  return (
    <Link to={path}>
      <div className="home-card">
        <div className="card-big-name">{bigName}</div>
        <div className="card-subject">{subject}</div>
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
}

export default SubjectCard;
