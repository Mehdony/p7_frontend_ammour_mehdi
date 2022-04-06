import React, { useState } from "react";
import "./CreatePost.css";
import UpImage from './UpImage.png';
import axios from "axios";

export default function CreatePost(props) {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  console.log(userId, username, token);

  const post = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let form = new FormData();
    form.append("userId", userId);
    form.append("image", selectedFile);
    form.append("name", username);
    form.append("description", content);
    form.append("published", true);
    const response = await axios.post(
      "http://localhost:8080/api/tutorials",
      form,
      config
    );
    console.log(response);
    props.setPosts([...props.posts, response.data]);
    //permet de réinitialiser le state du form
    setContent("");
    setSelectedFile("");
  };

  return (
    <>
      <form className="InputForm" typeof="post">
        <div className="form-group purple-border textAreaForm">
          <label for="exampleFormControlTextarea4"></label>
          <textarea
            placeholder={`Quoi de neuf, ${username}?`}
            className="form-control"
            id="exampleFormControlTextarea4"
            rows="5"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>
        </div>

        <div className="fileAndBtn">
          <label for="formFileMultiple" className="form-label-custom">
            <div className="label-custom">
            <img src={UpImage} alt="upload" className="upIcon" />
            </div>
            <input
              className="form-control-custom"
              type="file"
              id="formFileMultiple"
              multiple
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
          </label>
          <div className="btnFormContainer">
            <button
              onClick={(e) => {
                post(e);
              }}
              className="btn btn-primary"
            >
              Publier
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
