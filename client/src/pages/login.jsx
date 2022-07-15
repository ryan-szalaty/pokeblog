import { useState } from "react";
import {Link} from "react-router-dom";
const axios = require("axios");

function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const loginUser = () => {
    axios.post("http://localhost:8000/login", {
        email: email,
        password: password
    }).then((response) => {
      alert("User found!");
        console.log(response);
    });
  }
  return (
    <div>
      <h1>Login:</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}  
      >
        <label name="email">
          email:
          <input
            type="text"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label name="password">
          password:
          <input
            type="text"
            name="passsword"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </label>
        <Link type="submit" to={{pathname: "/"}} onClick={loginUser}>Submit</Link>
      </form>
    </div>
  );
}

export default Login;