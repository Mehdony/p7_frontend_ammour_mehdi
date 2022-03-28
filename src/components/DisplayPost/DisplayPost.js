import React, { useState, useEffect } from "react";
import "./DisplayPost.css";
import axios from "axios";

export default function DisplayPost() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const getPosts = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/tutorials/published",
        config
      );
      setPosts(response.data);
    };

    getPosts();
    console.log(posts);
  }, []);
  
  
  return <div>DisplayPost</div>;
}
