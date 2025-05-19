import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

export default function Column({ column }) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {prov => (
          <div ref={prov.innerRef} {...prov.droppableProps} className="column-cards">
            {column.cards.map((card, i) => (
              <Draggable key={card.id} draggableId={card.id} index={i}>
                {p => (
                  <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}>
                    <Card card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {prov.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
