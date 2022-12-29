import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Profile.css';

function Profile() {
  const elements = [
    {
      text: 'Home',
      icon: 'uil uil-home',
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
        <div className='profile-container'>
          <Sidebar elements={elements} create profile />
          <div className='profile-container'>
            <div className='banner-image'>
              <div className='profile-image' />
              <h3>Rashin</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
