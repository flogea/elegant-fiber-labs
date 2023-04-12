import React from 'react';

function PicAndLabel(props) {
  return (
    <div className="content-image">
      <img src={props.image} alt={props.image} name={`pic${props.num}`} />
      <label htmlFor="pic2">{props.label}</label>
    </div>
  );
}

export default PicAndLabel;
