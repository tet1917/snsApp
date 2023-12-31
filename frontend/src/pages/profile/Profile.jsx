import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Rightbar from '../../components/rightbar/Rightbar'
import "./Profile.css";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img src={PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImg" />
              <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">tetsu</h4>
              <span className="profileInfoDesx">
                SEアシストという会社で働いています。
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar profile />
          </div>

        </div>
      </div>

    </>
  )
}
