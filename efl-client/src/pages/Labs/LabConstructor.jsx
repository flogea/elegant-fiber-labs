import React from 'react';
import EditBlock from '../../components/DnD/EditBlock';
import Blocks from '../../components/DnD/InlineBlocks';
import LeftMenu from '../../components/DnD/LeftMenu';
import { FileComponent, PictureComponent, TextComponent } from '../../components/DnD';

function LabConstructor() {
  return (
    <div className="constructor">
      <LeftMenu />
      <EditBlock>
        <FileComponent />
      </EditBlock>
      <EditBlock>
        <TextComponent />
      </EditBlock>
      <EditBlock>
        <PictureComponent />
      </EditBlock>
      <EditBlock>Ghbdtn</EditBlock>
      <Blocks />
    </div>
  );
}

export default LabConstructor;
