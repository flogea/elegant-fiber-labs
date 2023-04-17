import React from 'react';
import { useSelector } from 'react-redux';

function SaveButton(props) {
  const performers = useSelector((state) => state.PerformerSlice);

  return (
    <div className="row">
      <div className="centering">
        <button
          type="submit"
          onClick={props.onClick}
          className="generate__btn"
          value="Сохранить"
          disabled={
            !(performers.performers && performers.group && performers.email) ? 'disabled' : null
          }>
          <span className="text">
            {/* <img src={props.preloader} alt="Loading..." /> */}
            {props.isLoading ? (
              <img src={props.preloader} alt="Loading..." loading="lazy" />
            ) : (
              'Сохранить'
            )}
          </span>
        </button>
        <p>{props.isSaved && props.isSaved}</p>
      </div>

      <div>
        {props.isSaved === 'Сохранено' ? (
          <>
            ID (Сохраните, пожалуйста): <b>{props.receivedId}</b>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default SaveButton;
