import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
const axios = require("axios");

function Post() {
  const [data, setData] = useState([]);
  const [loadState, setLoadState] = useState(false);
  const id = useParams().id;
  useEffect(() => {
    setLoadState(true);
    fetch(`http://localhost:8000/get/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoadState(false);
  }, [id]);
  const deletePost = (id) => {
    axios.post(`http://localhost:8000/get/${id}/delete`)
    .then((response) => console.log(response));
  }
  return (
    <div>
      {loadState && <p>Now loading...</p>}
      {!loadState && (
        data.map((post) => {
            return (
                <div key={post.postId}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={{pathname: `/blog/${id}/edit`}}>Edit Post</Link>
                    <Link to={{pathname: "/"}} onClick={() => {deletePost(id)}}>Delete Post</Link>
                </div>
            )
        })
      )}
    </div>
  );
}

export default Post;
