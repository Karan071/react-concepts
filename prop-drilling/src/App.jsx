// import React, { useContext, useState } from "react";
import { countAtom } from "./Store/atoms/count";
import { RecoilRoot,useRecoilValue, useRecoilState } from 'recoil';

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
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

// Component button
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase the count</button>
      <button onClick={() => setCount(count - 1)}> Decrease the count </button>
    </div>
  );
}
export default App;
