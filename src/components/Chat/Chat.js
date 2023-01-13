import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Chat.css'
function Chat({openChat,setOpenChat}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    boxShadow: 24,
  };

  const handleClose = () => setOpenChat(false);

  return (
    <div>
      <Modal
        open={openChat}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box sx={style}>
        <div id="frame">
              <div id="sidepanel">
                <div id="profile">
                  <div className="wrap">
                    <img
                      id="profile-img"
                      src="http://emilcarlsson.se/assets/mikeross.png"
                      className="online"
                      alt=""
                    />
                    <p>Mike Ross</p>
                    <i
                      className="fa fa-chevron-down expand-button"
                      aria-hidden="true"
                    ></i>
                    <div id="status-options">
                      <ul>
                        <li id="status-online" className="active">
                          <span className="status-circle"></span>
                          <p>Online</p>
                        </li>
                        <li id="status-away">
                          <span className="status-circle"></span>
                          <p>Away</p>
                        </li>
                        <li id="status-busy">
                          <span className="status-circle"></span>
                          <p>Busy</p>
                        </li>
                        <li id="status-offline">
                          <span className="status-circle"></span>
                          <p>Offline</p>
                        </li>
                      </ul>
                    </div>
                    <div id="expanded">
                      <label for="twitter">
                        <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                      </label>
                      <input name="twitter" type="text" value="mikeross" />
                      <label for="twitter">
                        <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                      </label>
                      <input name="twitter" type="text" value="ross81" />
                      <label for="twitter">
                        <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
                      </label>
                      <input name="twitter" type="text" value="mike.ross" />
                    </div>
                  </div>
                </div>
                <div id="search">
                  <label for="">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </label>
                  <input type="text" placeholder="Search contacts..." />
                </div>
                <div id="contacts">
                  <ul>
                    <li className="contact">
                      <div className="wrap">
                        <span className="contact-status online"></span>
                        <img
                          src="http://emilcarlsson.se/assets/louislitt.png"
                          alt=""
                        />
                        <div className="meta">
                          <p className="name">Louis Litt</p>
                          <p className="preview">You just got LITT up, Mike.</p>
                        </div>
                      </div>
                    </li>
                    <li className="contact active">
                      <div className="wrap">
                        <span className="contact-status busy"></span>
                        <img
                          src="http://emilcarlsson.se/assets/harveyspecter.png"
                          alt=""
                        />
                        <div className="meta">
                          <p className="name">Harvey Specter</p>
                          <p className="preview">
                            Wrong. You take the gun, or you pull out a bigger
                            one. Or, you call their bluff. Or, you do any one of
                            a hundred and forty six other things.
                          </p>
                        </div>
                      </div>
                    </li>
               
                  </ul>
                </div>
                <div id="bottom-bar">
                  <button id="addcontact">
                    <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>
                    <span>Add contact</span>
                  </button>
                  <button id="settings">
                    <i className="fa fa-cog fa-fw" aria-hidden="true"></i>
                    <span>Settings</span>
                  </button>
                </div>
              </div>
              <div className="content">
                <div className="contact-profile">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>Harvey Specter</p>
                  <div className="social-media">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="messages">
                  <ul>
                    <li className="sent">
                      <img
                        src="http://emilcarlsson.se/assets/mikeross.png"
                        alt=""
                      />
                      <p>
                        How the hell am I supposed to get a jury to believe you
                        when I am not even sure that I do?!
                      </p>
                    </li>
                    <li className="replies">
                      <img
                        src="http://emilcarlsson.se/assets/harveyspecter.png"
                        alt=""
                      />
                      <p>
                        When you're backed against the wall, break the god damn
                        thing down.
                      </p>
                    </li>
                    
                    
             
                  </ul>
                </div>
                <div className="message-input">
                  <div className="wrap">
                    <input type="text" placeholder="Write your message..." />
                    <i
                      className="fa fa-paperclip attachment"
                      aria-hidden="true"
                    ></i>
                    <button className="submit">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Chat;
