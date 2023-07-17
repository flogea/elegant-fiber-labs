import React from 'react';

// import '../../styles/Labs.scss';
import './index.scss';

import { ReactComponent as ArrowRight } from '../../../images/arrowR.svg';

function Foldable(props) {
  const [isOpen, setIsOpen] = React.useState(true);

  const parentRef = React.useRef();

  return (
    <div className="foldable">
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? 'foldableIcon' : 'foldableIcon active'}>{<ArrowRight />}</div>

        <h2>{props.header}</h2>
      </div>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          !isOpen
            ? {
                height: parentRef.current.scrollHeight + 'px',
              }
            : {
                height: '0px',
              }
        }>
        <div className="main-text">{props.children}</div>
      </div>
    </div>
  );
}

export default Foldable;
