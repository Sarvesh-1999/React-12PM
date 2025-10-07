import Child1 from "./Child1";

const Parent = () => {
  let str = "Hello Child";
  return (
    <>
      <h1>I am parent</h1>
      <Child1 data1={str} />
    </>
  );
};

export default Parent;
