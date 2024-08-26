import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { FaDeleteLeft  } from "react-icons/fa6";


function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch  = useDispatch()
  return (
    <div>
      <h2>Todos</h2>
      <ul>
      {todos.map((todo)=>(
        <li key={todo.id}                         className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light border-secondary"
>
          {todo.text}
          <FaDeleteLeft  onClick={()=>dispatch(removeTodo(todo.id))}></FaDeleteLeft>
        
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Todos
