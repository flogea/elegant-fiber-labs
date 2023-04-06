import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFileName } from '../../redux/slices/fileNameSlice';
import { setFileURL } from '../../redux/slices/fileURLSlice';
import Foldable from './Foldable';

function InputWithPreview({ num, ext }) {
  const fileName = useSelector((state) => state.fileNameSlice);
  const fileURL = useSelector((state) => state.fileURLSlice);

  const dispatch = useDispatch();

  const nameOfFile = `file${num}`;

  const onChangeInput = (e) => {
    let file = e.target.files[0];
    const currentName = file.name;
    if (ext === 'v') {
      file = new Blob([file], { type: 'text/plain' });
    }
    dispatch(setFileName({ ...fileName, [e.target.name]: currentName }));
    fileReader.readAsDataURL(file);
  };

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    dispatch(setFileURL({ [`${nameOfFile}URL`]: fileReader.result }));
  };

  return (
    <>
      <div className={`input-file ${ext}`}>
        <input
          type="file"
          onChange={onChangeInput}
          name={nameOfFile}
          required="required"
          id={`upload_file_input${num}`}
          accept={`text/plain, .${ext}`}
        />
        <label htmlFor={`upload_file_input${num}`}></label>
      </div>
      <span id={`output__data${num}`} className="output__span">
        {fileName[nameOfFile]}
      </span>
      {fileURL[`${nameOfFile}URL`] && ext === 'png' ? (
        <div className="foldable__content">
          <Foldable header="Предпросмотр">
            <div className="centeredInRow">
              <img src={fileURL[`${nameOfFile}URL`]} />
            </div>
          </Foldable>
        </div>
      ) : null}
      {fileURL[`${nameOfFile}URL`] && (ext === 'pdf' || ext === 'v') ? (
        <div className="foldable__content">
          <Foldable header="Предпросмотр">
            <div className="centeredInRow">
              <iframe
                style={{ width: '100%', height: '50vh' }}
                src={fileURL[`${nameOfFile}URL`]}
                frameBorder="0"></iframe>
            </div>
          </Foldable>
        </div>
      ) : null}
    </>
  );
}

export default InputWithPreview;
