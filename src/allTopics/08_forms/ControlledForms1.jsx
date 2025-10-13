import { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //! creating new user
    let user = { id:Date.now() , username, email, password };
    console.log(user); 

    //! get user from localStorage OR []
    let allUsers = JSON.parse(localStorage.getItem("users")) || []

    //! push newUser to allUsers[]
    allUsers.push(user)

    //! store allUsers in localStorage
    localStorage.setItem("users",JSON.stringify(allUsers))

    // clear input fields
    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <h1>ControlledForms 1</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />

        <label htmlFor="email">Email :</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <label htmlFor="password">Password :</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />
        <button>Submit</button>
      </form>


      
    </div>
  );
};

export default ControlledForms1;
