import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const FetchUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  async function getUsers() {
    let resp = await fetch("https://dummyjson.com/users");
    let data = await resp.json();
    console.log(data.users);
    setAllUsers(data.users);// store users array in state [{},{},{}...]
  }

  useEffect(() => {
    setTimeout(()=>{
        getUsers();
    },5000)
  }, []);

  return <div>
    <h1>Users : </h1>
    <section>
        {allUsers.length === 0 ? <PacmanLoader color="#ffed00" /> : allUsers.map((ele) => {
            let {id,firstName,maidenName,lastName , image} = ele
            return (
                <div key={id}>
                    <img src={image} alt={firstName} />
                    <h3>{firstName} {maidenName} {lastName}</h3>
                </div>
            )
        })}
    </section>

  </div>;
};

export default FetchUsers;
