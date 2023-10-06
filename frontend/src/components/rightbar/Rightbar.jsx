import React from 'react'
import "./Rightbar.css"

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{

    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="./assets/event.jpeg" alt="花火画像" className='eventImg'/>
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="../assets/person/1.jpeg" alt="" className='rightbarProfileImg'/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">カズイ　テツ</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/person/2.jpeg" alt="" className='rightbarProfileImg'/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tanaka</span>
          </li>
        </ul>
        <p className="prootionTitle">プロモーション広告</p>
        <img src="assets/promotion/promotion1.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">ショッピング</p>
        <img src="assets/promotion/promotion2.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">カーショップ</p>
        <img src="assets/promotion/promotion3.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">株式会社Number</p>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      profileのRightbarです
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar></ProfileRightbar> : <HomeRightbar></HomeRightbar>}
      </div>
    </div>
    )
}
