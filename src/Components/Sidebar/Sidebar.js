import React, { useState } from "react";
import "./Sidebar.css";
import image from "../../DummyData/images/profile-7.jpg";
// import image2 from "../../DummyData/images/profile-2.jpg";

function Sidebar({ elements, create, profile }) {
  const [active, setActive] = useState();
  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="left">
            {profile ? (
              <a href="/#" className="profile">
                <div className="profile-photo">
                  <img src={image} alt="" />
                </div>
                <div className="handle">
                  <h4>Muhammed Rashin</h4>
                  <p className="text-muted">@rash</p>
                </div>
              </a>
            ) : null}

            <div className="sidebar">
              {elements.map((element) => (
                <a
                  href="/#"
                  className={`menu-item ${active === element && "active"}`}
                  key={element.text}
                  onClick={() => setActive(element)}
                >
                  <span>
                    {element.count ? (
                      <i className={element.icon}>
                        <small className="notification-count">
                          {element.count}
                        </small>
                      </i>
                    ) : (
                      <i className={element.icon} />
                    )}
                  </span>
                  <h3>{element.text}</h3>
                </a>
              ))}
            </div>

            {create ? (
              <label htmlFor="create-post" className="btn btn-primary">
                Create
              </label>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
