import React from 'react';

function SendButton(props) {
  return (
    <div className="row">
      <div className="centering">
        <button className="send__button" onClick={props.onClick} id="subm_btn">
          <span className="text">
            {props.isLoading ? (
              <img src={props.preloader} alt="Loading..." loading="lazy" />
            ) : (
              'Отправить'
            )}
          </span>
        </button>
        <p>{props.isSended && props.isSended}</p>
      </div>
    </div>
  );
}

export default SendButton;
