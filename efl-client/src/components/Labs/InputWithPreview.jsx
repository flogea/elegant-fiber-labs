import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFileName } from '../../redux/slices/fileNameSlice';

function InputWithPreview({ num, ext }) {
  const [fileURL, setFileURL] = React.useState('');
  const fileName = useSelector((state) => state.fileNameSlice);
  const dispatch = useDispatch();

  const nameOfFile = `file${num}`;

  const onChangeInput = (e) => {
    const file = e.target.files[0];
    const currentName = file.name;
    dispatch(setFileName({ name: e.target.name, value: currentName }));
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
        {fileURL && ext === 'png' ? <img src={fileURL} /> : null}
      </span>
    </>
  );
}

export default InputWithPreview;
