import React from 'react';
import { useSelector } from 'react-redux';

import EditBlock from '../../components/DnD/EditBlock';
import Blocks from '../../components/DnD/InlineBlocks';
import LeftMenu from '../../components/DnD/LeftMenu';
import { FileComponent, PictureComponent, TextComponent } from '../../components/DnD';
import ConstructorArraySlice from '../../redux/slices/ConstructorArraySlice';

function LabConstructor() {
  const labBlocks = useSelector((state) => state.ConstructorArraySlice);

  React.useEffect(() => {
    console.log(labBlocks);
  }, [labBlocks]);

  return (
    <div className="constructor">
      <LeftMenu />

      {/* <FileComponent ext="png" num="1" />
      <TextComponent />
      <PictureComponent /> */}

      {labBlocks.map((block, index) => (
        <div key={index}>
          <EditBlock id={block.id}>{block.data}</EditBlock>
        </div>
      ))}

      {/* {Object.entries(labBlocks).map((block, index) => (
        <div key={index}>{block[1]}</div>
      ))} */}

      <Blocks />
    </div>
  );
}

export default LabConstructor;
