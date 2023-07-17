import React from 'react';
import EditBlock from '../../components/DnD/EditBlock';
import Blocks from '../../components/DnD/InlineBlocks';
import LeftMenu from '../../components/DnD/LeftMenu';
import { FileComponent, PictureComponent, TextComponent } from '../../components/DnD';

function LabConstructor() {
  return (
    <div className="constructor">
      <LeftMenu />

      {/* <EditBlock>
        <FileComponent ext="png" num="1" />
      </EditBlock>
      <EditBlock>
        <TextComponent />
      </EditBlock>
      <EditBlock>
        <PictureComponent />
      </EditBlock> */}

      <Blocks />
    </div>
  );
}

export default LabConstructor;
