import { useState, useEffect, useRef } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  let initailRenderRef = useRef(true);
  console.log(initailRenderRef); // {current: true}

  useEffect(() => {
    console.log("Render method"); // without second arguement
  });

  useEffect(() => {
    console.log("componentDidMount"); // with second arguement [] <-- empty array

    return () => {
      console.log("componentWillUnmount"); // clean-up function
    };
  }, []);

  useEffect(() => {
    if (initailRenderRef.current) {
      initailRenderRef.current = false;
      return;
    }
    console.log("componentDidUpdate"); // dependent upon state count
  }, [count]);

  return (
    <div>
      <h1>Learn Life cycle in Function Based</h1>
      <h2>Counter - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifeCycleInFBC;
