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
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
      <h4 className="rightbarTitle">ユーザー情報</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">出身：</span>
          <span className="rightbarInfoKey">福岡</span>
        </div>
        <h4 className="rightbarTitle">あなたの友達</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">数井　哲</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">田中　角栄</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">太田　均</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/4.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">丸山　通</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/5.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">渡辺　智</span>
          </div>
        </div>
      </div>
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
