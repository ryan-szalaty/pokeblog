import { useState, useEffect } from "react";

//const axios = require("axios").default;

function Blog() {
  const [data, setData] = useState([]);
  const [loadState, setLoadState] = useState(false)
  useEffect(() => {
    setLoadState(true)
    fetch("http://localhost:8000/get")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoadState(false);
  }, []);
  return (
    <div>
      {loadState && <p>Now loading...</p>}
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
