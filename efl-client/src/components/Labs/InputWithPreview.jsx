import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFileName } from '../../redux/slices/fileNameSlice';
import Foldable from './Foldable';

function InputWithPreview({ num, ext }) {
  const [fileURL, setFileURL] = React.useState('');
  const fileName = useSelector((state) => state.fileNameSlice);
  const dispatch = useDispatch();

  const nameOfFile = `file${num}`;

  const onChangeInput = (e) => {
    const file = e.target.files[0];
    const currentName = file.name;
    dispatch(setFileName({ ...fileName, [e.target.name]: currentName }));
    fileReader.readAsDataURL(file);
  };

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setFileURL(fileReader.result);
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
          accept={`.${ext}`}
        />
        <label htmlFor={`upload_file_input${num}`}></label>
      </div>
      <span id={`output__data${num}`} className="output__span">
        {fileName[nameOfFile]}
      </span>
      {fileURL && ext === 'png' ? (
        <div className="foldable__content">
          <Foldable header="Предпросмотр">
            <div className="centeredInRow">
              <img src={fileURL} />
            </div>
          </Foldable>
        </div>
      ) : null}
      {fileURL && ext === 'pdf' ? (
        <div className="foldable__content">
          <Foldable header="Предпросмотр">
            <div className="centeredInRow">
              <iframe
                style={{ width: '100%', height: '80vh' }}
                src={fileURL}
                frameBorder="0"></iframe>
            </div>
          </Foldable>
        </div>
      ) : null}
    </>
  );
}

export default InputWithPreview;
