import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <HomeIcon className="sidebarIcon"></HomeIcon>
                    <span className="sidebarListItemText">ホーム</span>
                </li>
                <li className="sidebarListItem">
                    <SearchIcon className="sidebarIcon"></SearchIcon>
                    <span className="sidebarListItemText">検索</span>
                </li>
                <li className="sidebarListItem">
                    <NotificationsIcon className="sidebarIcon"></NotificationsIcon>
                    <span className="sidebarListItemText">通知</span>
                </li>
                <li className="sidebarListItem">
                    <MessageIcon className="sidebarIcon"></MessageIcon>
                    <span className="sidebarListItemText">メッセージ</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarIcon"></BookmarkIcon>
                    <span className="sidebarListItemText">ブックマーク</span>
                </li>
                <li className="sidebarListItem">
                    <PersonIcon className="sidebarIcon"></PersonIcon>
                    <span className="sidebarListItemText">ホーム</span>
                </li>
                <li className="sidebarListItem">
                    <SettingsIcon className="sidebarIcon"></SettingsIcon>
                    <span className="sidebarListItemText">設定</span>
                </li>
            </ul>
            <hr  className='sidebarHr'/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className='sidebarFriendImg' />
                    <span className="sidebarFriendName">Tetsu</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className='sidebarFriendImg' />
                    <span className="sidebarFriendName">Tanaka</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpeg" alt="" className='sidebarFriendImg' />
                    <span className="sidebarFriendName">Kazui</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className='sidebarFriendImg' />
                    <span className="sidebarFriendName">TK</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className='sidebarFriendImg' />
                    <span className="sidebarFriendName">aaaa</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
