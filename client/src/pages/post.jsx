import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

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
  console.log(data);
  return (
    <div>
      {loadState && <p>Now loading...</p>}
      {!loadState && (
        data.map((post) => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={{pathname: `/blog/${id}/edit`, data: data}}>Edit Post</Link>
                </div>
            )
        })
      )}
    </div>
  );
}

export default Post;
