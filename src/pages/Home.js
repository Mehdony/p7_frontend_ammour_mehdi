import React, { useState } from "react";
import "../cssComponents/Home.css";
import DeleteAccount from "../components/DeleteAccount/DeleteAccount";
import CreatePost from "../components/CreatePost/CreatePost";
import DisplayPost from "../components/DisplayPost/DisplayPost";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logoBig from "../assets/images/logoBig.svg";

function Home() {
  const [posts, setPosts] = useState([]);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return token ? (
    <>
      <div className="static-left"></div>
      <div className="navBar">
        <img className="logo-small" src={logoBig} alt="Logo small" />
        <div className="navBar-Center">
          <h1 className="navBar-center-text" >Bonjour, {username.split(' ')[0]} !</h1>
        </div>
        <div className="navBar-right">
          <button
            className="logout-button btn btn-primary"
            onClick={handleLogout}
          >
            Deconnexion
          </button>

          <DeleteAccount />
        </div>
      </div>
      <CreatePost setPosts={setPosts} posts={posts} />
      <DisplayPost
        username={username}
        setPosts={setPosts}
        posts={posts}
        token={token}
      />

      <div className="static-right"></div>
    </>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default Home;
