const Child2 = (props) => {
  console.log(props.dbData);
  let { str, arr, obj, getDataFromChild } = props.dbData;

  return (
    <div>
      <h1>I am Child 2</h1>
      <h2>String is : {str}</h2>
      <h2>Object is : {obj.fname}  {obj.lname}</h2>
      <button onClick={()=>getDataFromChild("😻🚀")}>
        Send Data
      </button>
      <h2>Array is :</h2>
      {arr.map((ele,idx)=>{
        return <li key={idx}>{ele}</li>
      })}
    </div>
  );
};

export default Child2;
