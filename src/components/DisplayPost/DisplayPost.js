import React, { useEffect } from "react";
import CreateComment from "../CreateComment/CreateComment";
import DisplayComment from "../DisplayComment/DisplayComment";
import "./DisplayPost.css";
import axios from "axios";

export default function DisplayPost(props) {
  const token = localStorage.getItem("token");
  const posts = props.posts;
  const username = props.username;

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
   
      <div className="posts-container">
        {[...posts].reverse().map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
            <img className="imgPost" src={post.imageUrl} alt="post" />
            <CreateComment
              token={token}
              username={username}
              posts={posts}
              setId={post.id}
              setPost={props.setPosts}
            />
            {[...post.comments]?.reverse().map((com) => {
              return (
                <DisplayComment token={token} comData={com} postId={post.id} />
              );
            })}
          </div>
        ))}
      </div>
   
  );
}
