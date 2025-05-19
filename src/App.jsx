// src/App.jsx
import { useState, useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Board from './components/Board'
import { TaskContext } from './context/TaskContext'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const { onDragEnd } = useContext(TaskContext)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mi Kanban</h1>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
        </button>
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        <Board />
      </DragDropContext>
    </div>
  )
}
