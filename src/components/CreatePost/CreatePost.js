import React from "react";
import "./CreatePost.css";

export default function CreatePost() {
  return (
    <>
      <form className="InputForm" typeof="post">
        <div class="form-group purple-border textAreaForm">
          <label for="exampleFormControlTextarea4"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea4"
            rows="5"
          ></textarea>
        </div>
        <div className="fileAndBtn">
        <label for="formFileMultiple" class="form-label">
          {" "}
        </label>
        <input
          class="form-control"
          type="file"
          id="formFileMultiple"
          multiple
        />
        <div className="btnFormContainer">
          <button className="btn btn-primary">Send</button>
        </div>

        </div>
      </form>
    </>
  );
}
