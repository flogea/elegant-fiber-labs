import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import image from '../../../images/qr/f11.png';

import './index.scss';
import EditBlock from '../EditBlock';

function PictureComponent() {
  const [isEditable, setIsEditable] = React.useState(false);
  const [fileURL, setFileURL] = React.useState(image);

  const changeLabel = () => {
    setIsEditable(true);
  };

  const changePhoto = (e) => {
    let file = e.target.files[0];
    console.log(file);
    fileReader.readAsDataURL(file);
  };

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setFileURL(fileReader.result);
  };

  return (
    <div className="content-image">
      <input
        type="file"
        name="inputFile"
        id="inputFile"
        onChange={changePhoto}
        accept="image/*, .png, .jpg, .jpeg"
        style={{ display: 'none' }}
      />
      <label htmlFor="inputFile" className="editablePic">
        <img src={fileURL} name={`pic`} htmlFor="inputFile" />
      </label>
      <label htmlFor="pic" onClick={changeLabel} contentEditable={isEditable}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </label>
    </div>
  );
}

export default PictureComponent;
