import React from "react";
import "./Navbar.css";
import image from "../../DummyData/images/profile-1.jpg";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <h2 className="logo">Social Media</h2>
          <div className="search-bar">
            <i className="uil uil-search" />
            <input type="search" placeholder="Search For Something.." />
          </div>
          <div className="create">
            <label className="btn btn-primary" htmlFor="create-post">
              Create
            </label>
            <div className="profile-photo">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
