import React from "react";
import "./createPost.css";

function CreatPost() {
  return (
    <div>
      <form className="create-post">
        <div className="profile-pic">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <input
          type="text"
          placeholder="What's on your mind Chirag?"
          id="create-post"
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default CreatPost;
