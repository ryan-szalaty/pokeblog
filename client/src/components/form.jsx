import { useState } from "react";
const axios = require("axios");

function Form() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const addPost = () => {
    axios.post("http://localhost:8000/post", {
        title: title,
        body: body
    }).then((response) => {
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
        <label name="title">
          Title:
          <input
            type="text"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </label>
        <label name="body">
          Body:
          <input
            type="text"
            name="body"
            onChange={(event) => setBody(event.target.value)}
            value={body}
          />
        </label>
        <button type="submit" onClick={addPost}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
