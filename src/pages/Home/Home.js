import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Stories from "../../components/Stories/Stories";
import CreatPost from "../../components/CreatPost/CreatPost";
import Posts from "../../components/Posts/Posts";
import Massages from "../../components/Massages/Massages";
import FriendRequests from "../../components/FriendRequests/FriendRequests";

function Home() {
  const elements = [
    {
      text: "Home",
      icon: "uil uil-home",
    },
    {
      text: "Explore",
      icon: "uil uil-compass",
    },
    {
      text: "Notification",
      icon: "uil uil-bell",
      count: 9,
    },
    {
      text: "Massages",
      icon: "uil uil-envelope-alt",
    },
    {
      text: "Analystic",
      icon: "uil uil-chart-line",
    },
    {
      text: "Theme",
      icon: "uil uil-palette",
    },
    {
      text: "Settings",
      icon: "uil uil-setting",
    },
  ];
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <Sidebar elements={elements} create profile />
          <div className="middle">
            <Stories />
            <CreatPost />
            <Posts />
          </div>

          <div className="right">
            <Massages />
            <FriendRequests />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
