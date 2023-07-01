import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  FileComponent,
  GeneratingComponent,
  InputComponent,
  PictureComponent,
  TableComponent,
  TextComponent,
} from '../../components/DnD';

const components = {
  text: {
    name: 'Текст',
    data: <TextComponent></TextComponent>,
  },
  table: {
    name: 'Таблица',
    data: <TableComponent></TableComponent>,
  },
  picture: {
    name: 'Картинка',
    data: <PictureComponent></PictureComponent>,
  },
  generating: {
    name: 'Генерируемые значения',
    data: <GeneratingComponent></GeneratingComponent>,
  },
  input: {
    name: 'Поля для ввода',
    data: <InputComponent></InputComponent>,
  },
  file: {
    name: 'Файлы',
    data: <FileComponent></FileComponent>,
  },
};

function DndConstructor() {
  const [dndComponents, setDndComponents] = React.useState([]);

  const DragDropHandler = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    if (type === 'group') {
      const reorderedStores = [...dndComponents];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setDndComponents(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = dndComponents.findIndex((store) => store.id === source.droppableId);
    const storeDestinationIndex = dndComponents.findIndex(
      (store) => store.id === destination.droppableId,
    );

    const newSourceItems = [...dndComponents[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...dndComponents[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...dndComponents];

    newStores[storeSourceIndex] = {
      ...dndComponents[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...dndComponents[storeDestinationIndex],
      items: newDestinationItems,
    };

    setDndComponents(newStores);
  };

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr ', padding: '5%' }}>
        <div className="leftPanel" style={{ border: '1px solid white', color: 'white' }}>
          {Object.entries(components).map((name, index) => (
            <div
              className="nameBlock"
              style={{ borderBottom: '1px solid black', padding: '10px', cursor: 'pointer' }}
              key={`${name}_${index}`}
              onClick={() => {
                setDndComponents([...dndComponents, name[1].data]);
              }}>
              {name[1].name}
            </div>
          ))}
        </div>
        <div className="preview" style={{ border: '1px solid white', color: 'white' }}>
          <DragDropContext onDragEnd={DragDropHandler}>
            <Droppable droppableId="ROOT" type="group">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {dndComponents.map((name, index) => (
                    <Draggable
                      draggableId={`${Math.floor(Math.random * 100)}_${index}`}
                      key={`${Math.floor(Math.random * 100)}_${index}`}
                      index={index}>
                      {(provided) => (
                        <div
                          className="dndComponent"
                          style={{ padding: '20px ' }}
                          key={`${index}`}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}>
                          {name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {/* <div className="latexPreview" style={{ border: '1px solid white', color: 'white' }}></div>
        <div className="rightPanel" style={{ border: '1px solid white', color: 'white' }}></div> */}
      </div>
    </>
  );
}

export default DndConstructor;
