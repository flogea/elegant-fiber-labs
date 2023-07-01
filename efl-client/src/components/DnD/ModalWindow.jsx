import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/Home.scss';

import { setShowModal } from '../../redux/slices/ShowModalSlice';

function ModalWindow({ children }) {
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.ShowModalSlice.showModal);
  // const [currentImg, setCurrentImg] = React.useState(null);

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  const handleOpenModal = () => {
    dispatch(setShowModal(true));
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Статус</h2>
              <span className="modal-close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal-status">
              {/* <p>{`${isTrueQR}`}</p> */}
              {/* <img src={currentImg}></img> */}
              {children}
            </div>
            <div className="saveCancel">
              <button>Отмена</button>
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalWindow;
