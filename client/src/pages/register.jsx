import { useState } from "react";
import {Link} from "react-router-dom";
const axios = require("axios");

function Register() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const addUser = () => {
    axios.post("http://localhost:8000/register", {
        name: name,
        email: email,
        password: password
    }).then((response) => {
      alert("User successfully registered.");
        console.log(response);
    });
  }
  return (
    <div>
      <h1>Add a New Post:</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}  
      >
        <label name="name">
          name:
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
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
        <Link type="submit" to={{pathname: "/"}} onClick={addUser}>Submit</Link>
      </form>
    </div>
  );
}

export default Register;
