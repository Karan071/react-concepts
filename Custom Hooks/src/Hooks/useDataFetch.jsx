import React, { useEffect, useState } from 'react'
import axios from "axios"

const useDataFetch = () => {
  const [loading,setLoading] = useState(true)
  const [todos,setTodos] = useState([])

  useEffect(() => {
   setTimeout(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      setTodos(response.data);
      setLoading(false)
    })
   },2000);
  }, [])
  return {todos,loading}
}

export default useDataFetch