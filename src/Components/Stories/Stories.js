import React from "react";
import "./Stories.css";
// import image from "../../DummyData/images/profile-1.jpg";

function Stories() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="middle">
            <div className="stories">
              <div className="story">
                <div className="profile-pic">
                  <img src="./images/profile-8.jpg" alt="" />
                </div>
                <p className="name">Your Story</p>
              </div>
              <div className="story">
                <div className="profile-pic">
                  <img src="./images/profile-9.jpg" alt="" />
                </div>
                <p className="name">Lilla James</p>
              </div>
              <div className="story">
                <div className="profile-pic">
                  <img src="./images/profile-2.jpg" alt="" />
                </div>
                <p className="name">Jasmine Singh</p>
              </div>
              <div className="story">
                <div className="profile-pic">
                  <img src="./images/profile-3.jpg" alt="" />
                </div>
                <p className="name">Celina Fernandes</p>
              </div>
              <div className="story">
                <div className="profile-pic">
                  <img src="./images/profile-4.jpg" alt="" />
                </div>
                <p className="name">Mia Addams</p>
              </div>
              <div className="story">
                <div className="profile-pic">
                  <img src="./images/profile-5.jpg" alt="" />
                </div>
                <p className="name">Christy Kahea</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Stories;
