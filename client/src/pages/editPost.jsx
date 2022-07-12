import { useState } from "react";
import {useParams} from "react-router-dom";
const axios = require("axios");

function EditPost() {
  const id = useParams().id;
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const editPost = () => {
    axios
      .post(`http://localhost:8000/get/${id}/edit`, {
        title: title,
        body: body,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <h1>Edit Post:</h1>
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
        <button type="submit" onClick={editPost}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPost;
