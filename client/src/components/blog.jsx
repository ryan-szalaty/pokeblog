import { useState, useEffect} from "react";
import {Link} from "react-router-dom";

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
            <Link to={`blog/${post.id}`}>Click to View Post</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
