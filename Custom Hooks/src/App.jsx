import { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './Components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data)
      })
  }, [])

  return (
    <>
      <div>
        {todos.map((todo) => (
          todo.id % 2 == 0 && todo.id > 20 && todo.id < 60 ? <Todo key={todo.id} todo={todo} /> : ""
        ))}
      </div>
    </>
  )
}


export default App
