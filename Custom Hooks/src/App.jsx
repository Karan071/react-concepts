import Todo from './Components/Todo'
import useDataFetch from './Hooks/useDataFetch'
import Loading from './Components/Loading';
import SearchBar from './Components/SearchBar';
import useIsOnline from './Hooks/useIsOnline';
import useMousePointer from './Hooks/useMousePointer';
import useInterval from './Hooks/useInterval';
import { useState } from 'react';

function App(n) {
  // const {todos,SearchBar} = useDataFetch(5);
  // const isOnline = useIsOnline();
  // const position = useMousePointer();
  // const [count,setCount] = useState(0);
  // useInterval(() => {
  //   setCount(c => c + 1)
  // },1000)



  return (
    <div>
      {/* <div>{ loading ? <Loading/> : todos.map((item) => (<Todo key={item.id} todo={item} />)) }</div> */}
      {/* {isOnline ? "You are online Yayayaya!!" : "You are offline, kindy connect with your network"} */}
      {/* <div>Your mouse {position.x} {position.y}</div> */}
      {/* <div>Timer is at {count}</div> */}
      <SearchBar />

    </div>
  )
}

export default App
