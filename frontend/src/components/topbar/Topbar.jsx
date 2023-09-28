import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Chat from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Topbar.css";


export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>Real SNS</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchIcon  className='searchIcon'/>
          <input type="text" className='searchInput' placeholder='探し物は何ですか？' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className="topbarItemIcons">
          <div className='topbarIconItem'>
            < Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <NotificationsIcon />
            <span className='topbarIconBadge'>2</span>
          </div>
        </div>
      </div>
      <img src="./assets/person/1.jpeg" alt="" className='topbarImg' />
    </div>
  )
}
