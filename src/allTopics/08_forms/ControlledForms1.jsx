import React, { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser = { username, email, password };
    console.log(newUser);

    let allUsers = JSON.parse(localStorage.getItem("users")) || []

    allUsers.push(newUser)

    localStorage.setItem("users" , JSON.stringify(allUsers))

    setUsername("")
    setEmail("")
    setPassword("")
  };

  return (
    <div>
      <h1>ControlledForms1</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
