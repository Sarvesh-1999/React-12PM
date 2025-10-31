import React, { useReducer } from "react";

let initailState = 0;

function reducerFunc(prevState, action) {
    console.log(prevState,action);
    
  switch (action) {
    case "increment":
      return prevState + 1;
    case "decrement":
     if (prevState>0) {
            return prevState - 1
     }else{
        return 0
     }
    case "reset":
        return 0
  }
}

const Reducer = () => {
  let [state, dispatch] = useReducer(reducerFunc, initailState); // [0, func]
  return (
    <div>
      <h1>Reducer State : {state}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>

    </div>
  );
};

export default Reducer;
