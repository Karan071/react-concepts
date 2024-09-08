import { useEffect, useState } from "react";
import axios from "axios";

// Cleaning the hook to include a loading parameter
// const useDataFetch = () => {
//   const [loading,setLoading] = useState(true)
//   const [todos,setTodos] = useState([])

//   useEffect(() => {
//    setInterval(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       setTodos(response.data);
//       setLoading(false);
//       console.log()
//     })
//    }, 4000);
//   }, [])
//   return {todos,loading}
// }

// Auto refreshing hook
const useDataFetch = (n) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        setTodos(res.data);
        setLoading(false);
      }, n * 1000);

      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodos(res.data);
        setLoading(false)
      })

      //clean up logic : just like unmount in lifecycle method in class components
      return () => {
        clearInterval(value);
      }

    }, [n]);
  });

  return { todos, loading };
};

export default useDataFetch;
