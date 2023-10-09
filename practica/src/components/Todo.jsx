import React from 'react'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <a className="edit-icon"  onClick={() => editTodo(task.id)} > Editar | </a>
        <a className="delete-icon"  onClick={() => deleteTodo(task.id)} >Eliminar</a>
        </div>
    </div>
  )
}