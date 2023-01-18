import React, { useState, useContext } from 'react';
import './Sidebar.css';
import image from '../../assets/dummyData/images/profile-7.jpg';
import { useNavigate } from 'react-router-dom';
import Chat from '../Chat/Chat';
import { UserContext } from '../../store/userContext';

function Sidebar({ elements, create, profile }) {
  const user = useContext(UserContext);

  const navigate = useNavigate();
  const [active, setActive] = useState();
  const [openChat, setOpenChat] = useState(false);

  return (
    <div>
      <div className="left">
        {profile ? (
          <a href="/#" className="profile">
            <div className="profile-pic">
              <img
                src={
                  user.profileImg
                    ? user.profileImg
                    : 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                }
                alt=""
              />
            </div>
            <div className="handle">
              <h4>
                {user.firstName} {user.lastName}
              </h4>
              <p className="text-muted">@{user.username}</p>
            </div>
          </a>
        ) : null}

        <div className="sidebar">
          {elements.map((element) => (
            <a
              className={`menu-item ${active === element && 'active'}`}
              key={element.text}
              onClick={() => {
                navigate(element.path);
                setActive(element);
                element.text === 'Messages'
                  ? setOpenChat(true)
                  : setOpenChat(false);
              }}
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
      <Chat openChat={openChat} setOpenChat={setOpenChat} />
    </div>
  );
}

export default Sidebar;
