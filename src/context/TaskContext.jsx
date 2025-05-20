import { createContext } from 'react';
import useLocalStorage from '../hooks/useFetch';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [columns, setColumns] = useLocalStorage('kanban', [
    { id: 'todo',     title: 'Por hacer',   cards: [] },
    { id: 'inprog',   title: 'En progreso', cards: [] },
    { id: 'done',     title: 'Hecho',       cards: [] },
  ]);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    setColumns(cols => {
      const copy = JSON.parse(JSON.stringify(cols));
      const from = copy.find(c=>c.id===source.droppableId);
      const to   = copy.find(c=>c.id===destination.droppableId);
      const [moved] = from.cards.splice(source.index,1);
      to.cards.splice(destination.index,0,moved);
      return copy;
    });
  };

  return (
    <TaskContext.Provider value={{ columns, setColumns, onDragEnd }}>
      {children}
    </TaskContext.Provider>
  );
}
