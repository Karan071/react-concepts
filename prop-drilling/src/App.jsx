// import React, { useContext, useState } from "react";
import { countAtom } from "./Store/atoms/count";
import { RecoilRoot,useRecoilValue, useRecoilState,useSetRecoilState } from 'recoil';

const App = () => {
  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
};

//Component Count
function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <TextArea/>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  );
}

function TextArea(){
  const count = useRecoilValue(countAtom);
  return(
    <div>
      {count % 2==0 ? "it is even" : ""}
    </div>
  )
}


// Component button
function Buttons() {
  // here we dont exactly need count
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount  = useSetRecoilState(countAtom); // now the buttons is also not gettin g re-rendered
  console.log("Re-rendered")


  //three ways to update the setCount 
  //setCount(count + 1);
  //setCount(prev => prev + 1)
  //setCount(function(c)
  // return c + 1;  
// )
  console.log("re-render-button")
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase the count</button>
      <button onClick={() => setCount(count => count - 1)}> Decrease the count </button>
    </div>
  );
}
export default App;
