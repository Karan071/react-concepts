import React, { useEffect, useState } from 'react'
import axios from "axios"

const useDataFetch = () => {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => setTodos(response.data))
  },[])
  return (
    <div>
      
    </div>
  )
}

export default useDataFetch