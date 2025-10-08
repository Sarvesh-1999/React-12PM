import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [emogi, setEmogi] = useState("");

  let str = "Hello Child";
  let arr = [10, 20, 30, 40, 50];
  let obj = {
    fname: "John",
    lname: "Doe",
  };

  function getDataFromChild(val) {
    console.log("Data from child is --> ", val);
    setEmogi(val);
  }

  return (
    <>
      <h1>I am parent {emogi}</h1>

      {/* SENDING MULTIPLE PROPS */}
      <Child1 data1={str} data2={arr} data3={obj} data4={getDataFromChild} />

      <hr />

      {/* SENDING SINGLE PROP WITH MULTIPLE DATA */}
      <Child2 dbData={{ str, arr, obj, getDataFromChild }} />
    </>
  );
};

export default Parent;

// let id = 1
// let fname = "John"
// let sal = 500000

// let obj = {id,fname,sal}

// console.log(obj); // {id:1 ,fname:"" ,sal : 500000}
