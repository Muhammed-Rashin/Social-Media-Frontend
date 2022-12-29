import React from 'react';
import './Massages.css';

import profile from '../../assets/dummyData/images/profile-9.jpg';

function Massages() {
  return (
    <div className='messages'>
      <div className='heading'>
        <h4>Messages</h4>
        <span>
          <i className='uil uil-edit' />
        </span>
      </div>

      <div className='search-bar'>
        <span>
          <i className='uil uil-search' />
        </span>
        <input
          type='search'
          placeholder='Search Messages'
          id='message-search'
        />
      </div>

      <div className='category'>
        <h6 className='active'>Primary</h6>
        <h6>General</h6>
        <h6 className='message-requests'>Requests(7)</h6>
      </div>
      <div className='message'>
        <div className='profile-pic'>
          <img src={profile} alt='' />
          <div className='active' />
        </div>
        <div className='message-body'>
          <h5>Kareena Joshua</h5>
          <p className='text-muted'>Just woke up bruh..</p>
        </div>
      </div>

      <div className='message'>
        <div className='profile-pic'>
          <img src={profile} alt='' />
          <div className='active' />
        </div>
        <div className='message-body'>
          <h5>Kareena Joshua</h5>
          <p className='text-muted'>Just woke up bruh..</p>
        </div>
      </div>

      <div className='message'>
        <div className='profile-pic'>
          <img src={profile} alt='' />
          <div className='active' />
        </div>
        <div className='message-body'>
          <h5>Kareena Joshua</h5>
          <p className='text-muted'>Just woke up bruh..</p>
        </div>
      </div>

      <div className='message'>
        <div className='profile-pic'>
          <img src={profile} alt='' />
          <div className='active' />
        </div>
        <div className='message-body'>
          <h5>Kareena Joshua</h5>
          <p className='text-muted'>Just woke up bruh..</p>
        </div>
      </div>

      <div className='message'>
        <div className='profile-pic'>
          <img src={profile} alt='' />
          <div className='active' />
        </div>
        <div className='message-body'>
          <h5>Kareena Joshua</h5>
          <p className='text-muted'>Just woke up bruh..</p>
        </div>
      </div>
    </div>
  );
}

export default Massages;
