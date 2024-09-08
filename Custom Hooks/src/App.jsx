import { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './Components/Todo'
import useDataFetch from './Hooks/useDataFetch'

function App() {
  const {todos,loading} = useDataFetch();

  return (
    <>
      <div>
      {loading 
          ? "Loading !!" 
          : todos.map((item) => (  // Used 'todo' instead of 'todos'
            <Todo key={item.id} todo={item} /> // Proper JSX return
          ))
        }
      </div>
    </>
  )
}

export default App
