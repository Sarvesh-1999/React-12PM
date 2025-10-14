import { useState } from "react";

const ControlledForms2 = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
  };

  return (
    <div>
      <h1>ControlledForms2</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginUser.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={loginUser.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={loginUser.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
