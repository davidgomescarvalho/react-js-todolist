import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {
  let todos = [
    'Go to the store',
    'Finish the tutorial',
    'Clean the house'
  ]
  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
