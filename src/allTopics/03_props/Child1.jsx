const Child1 = (props) => {
  console.log(props); // {data1:"Hello Child"}

  return (
    <>
      <h1>I am Child 1 {props.data1}</h1>
    </>
  );
};

export default Child1;
