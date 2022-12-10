import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

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
      <Sidebar elements={elements} create profile />
    </div>
  );
}

export default Home;
