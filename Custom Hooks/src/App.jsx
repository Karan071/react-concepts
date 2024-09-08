import Todo from './Components/Todo'
import useDataFetch from './Hooks/useDataFetch'
import Loading from './Components/Loading';

function App(n) {
  const {todos,loading} = useDataFetch(5);

  return (
    <>
      <div>
      { loading ? <Loading/> : todos.map((item) => (<Todo key={item.id} todo={item} />)) }
      </div>
    </>
  )
}

export default App
