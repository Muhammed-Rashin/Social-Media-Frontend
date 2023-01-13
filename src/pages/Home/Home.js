/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Stories from '../../components/Stories/Stories';
import CreatPost from '../../components/CreatPost/CreatPost';
import Posts from '../../components/Posts/Posts';
import Massages from '../../components/Massages/Massages';
import FriendRequests from '../../components/FriendRequests/FriendRequests';
import Chat from '../../components/Chat/Chat';

function Home() {
  const [posts, setPosts] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const elements = [
    {
      text: 'Home',
      icon: 'uil uil-home',
      path: '/',
    },
    {
      text: 'Explore',
      icon: 'uil uil-compass',
    },
    {
      text: 'Notification',
      icon: 'uil uil-bell',
      count: 9,
    },
    {
      text: 'Massages',
      icon: 'uil uil-envelope-alt',
    },
    {
      text: 'Analystic',
      icon: 'uil uil-chart-line',
    },
    {
      text: 'Theme',
      icon: 'uil uil-palette',
    },
    {
      text: 'Settings',
      icon: 'uil uil-setting',
    },
  ];
  return (
    <div>
      <Navbar />
      <main>
        <button onClick={() => setOpenChat(true)}>Open Chat</button>

        <div className="container">
          <Sidebar elements={elements} create profile />
          <div className="middle">
            <Stories />
            <CreatPost setPosts={setPosts} />
            <Posts posts={posts} setPosts={setPosts} />
          </div>

          <div className="right">
            <Massages />
            <FriendRequests />
          </div>
        </div>
      </main>
      <Chat openChat={openChat} setOpenChat={setOpenChat}/>
    </div>
  );
}

export default Home;
