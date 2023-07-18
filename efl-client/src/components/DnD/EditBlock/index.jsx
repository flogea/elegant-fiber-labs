import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './EditBlock.scss';

import dub from '../../../images/icons/dub.svg';
import del from '../../../images/icons/trash.svg';

import { deleteComponent } from '../../../redux/slices/ConstructorArraySlice';

function EditBlock({ children, id }) {
  const dispatch = useDispatch();

  const deleteBlock = () => {
    dispatch(deleteComponent(id));
  };

  return (
    <div className="editBlock">
      <div className="leftBlocks">
        <button className="contentBtn">Редактировать</button>
      </div>
      <div className="mainContent">{children}</div>
      <div className="rightBlocks">
        <div className="editLine">
          <button>
            <img src={dub} alt="Дублировать" />
          </button>
          <button onClick={deleteBlock}>
            <img src={del} alt="Удалить" />
          </button>
        </div>
        <div className="moveLine">
          <button>&#9650;</button>
          <button>&#9660;</button>
        </div>
      </div>
      <div className="add">
        <button className="addBlock">&#43;</button>
      </div>
    </div>
  );
}

export default EditBlock;
