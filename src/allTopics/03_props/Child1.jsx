const Child1 = (props) => {
  console.log(props);
  // {data1:"Hello Child" , data2 : [] , data3 : {fname: 'John', lname: 'Doe'}}

  return (
    <>
      <h1>
        I am Child 1 {props.data1} {props.data2}
      </h1>
      <h2>Welcome {props.data3.fname}  {props.data3.lname} </h2>

      <button onClick={()=>props.data4("🩷")}>
        send data
      </button>
    </>
  );
};

export default Child1;
