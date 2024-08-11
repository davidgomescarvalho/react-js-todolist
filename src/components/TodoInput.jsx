//import React from 'react'
import { useState } from 'react'

export const TodoInput = (props) => {
  const { handleAddTodos } = props

  const [todoValue, setTodoValue] = useState('')
  return (
    <header>
      <input value={todoValue} onChange={(event) => {
        setTodoValue(event.target.value)
      }} placeholder="Enter todo..." />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }} >Add</button>
    </header>
  )
}
export default TodoInput
