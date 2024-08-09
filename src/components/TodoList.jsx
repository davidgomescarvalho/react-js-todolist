//import React from 'react'
import TodoCard from './TodoCard'; // Import the TodoCard component

const TodoList = (props) => {
  const { todos } = props

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard >
        )
      })}
    </ul>
  )
}

export default TodoList
