import React, {  useEffect } from "react";
import "./DisplayPost.css";
import axios from "axios";

export default function DisplayPost(props) {
  // const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  const posts = props.posts;
  
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const getPosts = async () => {

      let response = await axios.get(
        "http://localhost:8080/api/tutorials/published",
        config
      );

      

      props.setPosts(response.data);
    };

    getPosts();
    
  }, []);

  return (
    <div className="display-post">
      <h1>Display Post</h1>
      <div className="post-container">
        {[...posts].reverse().map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
            <img className='imgPost'src={post.imageUrl} alt="post" />
          </div>
        ))}
      </div>
    </div>
  );
}


