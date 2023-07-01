import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ModalWindow from './ModalWindow';

import { setShowModal } from '../../redux/slices/ShowModalSlice';

function PictureComponent() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setShowModal(true));
    console.log('true');
  }, []);

  return (
    <>
      <ModalWindow>
        <input type="file" />
        <input type="text" />
      </ModalWindow>
      <div className="content-image">
        <img src="" alt="" />
        <label htmlFor=""></label>
      </div>
    </>
  );
}

export default PictureComponent;
