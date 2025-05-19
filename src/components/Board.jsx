import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Column from './Column';

export default function Board() {
  const { columns } = useContext(TaskContext);
  return <div className="board">{columns.map(c=> <Column key={c.id} column={c}/>)}</div>;
}
