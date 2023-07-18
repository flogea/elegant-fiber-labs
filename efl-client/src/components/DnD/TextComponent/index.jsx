import React from 'react';

import './index.scss';

function TextComponent() {
  const [isEditable, setIsEditable] = React.useState(false);

  const changeText = () => {
    setIsEditable(true);
  };

  return (
    <>
      <div className="mainText" contentEditable={isEditable} onClick={changeText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis veritatis omnis
        cumque cupiditate animi libero magni distinctio. Consectetur deleniti non quaerat, voluptate
        at aspernatur labore in odio animi minima!
      </div>
    </>
  );
}

export default TextComponent;
