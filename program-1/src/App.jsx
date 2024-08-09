import { useState } from "react";

const 

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <input type="text" placeholder="Title" value={title} />
      <input type="text" placeholder="Description" value={description} />
    </>
  );
}

export default App;

// function NewComponentHeader(){
//   const [title,settitle] = useState("My name is Harkirat");

//   function fxnOnClick(){
//     settitle("My name is" + Math.random());
//   }

//   return <>
//     <button onClick={fxnOnClick}>Click me</button>
//     <Header title={title}/>
//   </>
// }

// function Header({title}){
//   return(
//     <>
//       <h1>Hi {title}</h1>
//     </>
//   )
// }
