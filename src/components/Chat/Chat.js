import * as React from 'react';
import {
  useEffect, useRef, useState, useContext,
} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { io } from 'socket.io-client';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';
import instance from '../../api/axios';
import { UserContext } from '../../store/userContext';

function Chat({ openChat, setOpenChat }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [messageText, setMessageText] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [emojiVisiblity, setEmojiVisiblity] = useState(false);
  const scroll = useRef();
  const socket = useRef();

  const user = useContext(UserContext);

  const userId = localStorage.getItem('id');

  const onEmojiClick = (e) => {
    setMessageText(messageText + e.emoji);
    setEmojiVisiblity(false);
  };

  const getAllMessages = async () => {
    const response = await instance.post('/getMessages', {
      recieverId: currentUser._id,
    });
    response.data.forEach((message) => {
      if (message.from === userId) {
        message.send = true;
      }
    });
    setMessages([...response.data]);
  };

  useEffect(() => {
    getAllMessages();
  }, [currentUser]);

  const confChat = () => {
    socket.current = io('http://13.231.164.178:7000');
    socket.current.emit('new-user-add', userId);
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users);
      console.log('users', users);
    });
    socket.current.on('recieve-message', (message) => {
      setMessages((messages) => messages.concat([{ message }]));
    });
  };

  useEffect(() => {
    instance.get('/getAllUsers').then(({ data }) => {
      setUsers(data);
      setCurrentUser(data[0]);
      confChat();
    });
  }, []);

  const handleClose = () => setOpenChat(false);

  const handleSend = async () => {
    if (messageText !== '') {
      setMessages([...messages, { message: messageText, send: true }]);

      // Sending to Socket
      socket.current.emit('send-message', {
        message: messageText,
        to: currentUser._id,
      });

      setMessageText('');
      // Save Massage to Database
      await instance.post('/sentMassage', {
        to: currentUser._id,
        message: messageText,
      });
    }
  };

  // Always Scroll To Last Chat

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <Modal
        open={openChat}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1000,
            boxShadow: 24,
          }}
        >
          <div id="frame">
            <div id="sidepanel">
              <div id="profile">
                <div className="wrap">
                  <img
                    id="profile-img"
                    src={user.profileImg}
                    className="online"
                    alt=""
                  />
                  <p>{user.username}</p>
                  <i
                    className="fa fa-chevron-down expand-button"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div id="search">
                <label htmlFor="">
                  <i className="fa fa-search" aria-hidden="true" />
                </label>
                <input type="text" placeholder="Search contacts..." />
              </div>
              <div id="contacts">
                <ul>
                  {users.map((user) => (
                    <li
                      onClick={() => setCurrentUser(user)}
                      className={`contact ${
                        user === currentUser && 'active'
                      }`}
                      key={user._id}
                    >
                      <div className="wrap">
                        {onlineUsers.find(
                          (element) => element.userId === user._id,
                        ) ? (
                          <span className="contact-status online" />
                          ) : null}
                        <img
                          src={
                              user.profileImg
                                ? user.profileImg
                                : 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                            }
                          alt=""
                        />
                        <div className="meta">
                          <p className="name">{user.username}</p>
                          <p className="preview">{user.bio}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="contact-profile">
                <img
                  src={
                    currentUser.profileImg
                      ? currentUser.profileImg
                      : 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
                  }
                  alt=""
                />
                <p>{currentUser.username}</p>
              </div>
              <div className="messages">
                <ul>
                  {messages.map((message,index) => (
                    <li
                      ref={scroll}
                      className={message.send ? 'sent' : 'replies'}
                      key={message.message + index}
                    >
                      {message.send ? (
                        <img
                          src={
                              user.profileImg
                                ? user.profileImg
                                : 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png'
                            }
                          alt=""
                        />
                      ) : (
                        <img
                          src={
                              currentUser.profileImg
                                ? currentUser.profileImg
                                : 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png'
                            }
                          alt=""
                        />
                      )}
                      <p>{message.message}</p>
                    </li>
                  ))}

                  <li>
                    <p> </p>
                  </li>
                </ul>
              </div>
              <div className="message-input">
                <div className="wrap">
                  <div className={emojiVisiblity ? null : 'hideImoji'}>
                    <EmojiPicker width={450} onEmojiClick={onEmojiClick} />
                  </div>

                  <input
                    type="text"
                    id="message-sender-input"
                    placeholder="Write your message..."
                    onChange={(e) => setMessageText(e.target.value)}
                    value={messageText}
                  />
                  <i
                    onClick={() => setEmojiVisiblity(!emojiVisiblity)}
                    className="fa-solid fa-face-smile emoji-icon"
                  />
                  <button onClick={handleSend} className="submit">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
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
