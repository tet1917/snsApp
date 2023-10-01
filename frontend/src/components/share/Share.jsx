import React from 'react';
import "./Share.css";
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';


export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input type="text" className="shareInput" placeholder='今何しているの？' />
            </div>
            <hr className="shareHr" />
            <div className="shareButtons">
                <div className="shareOptions">
                    <div className="shareOption">
                        <ImageIcon className="shareIcon" htmlColor='blue'></ImageIcon>
                        <span className="shareOptionText">写真</span>
                    </div>
                    <div className="shareOption">
                        <GifIcon className="shareIcon" htmlColor='hotpink'></GifIcon>
                        <span className="shareOptionText">写真</span>
                    </div>
                    <div className="shareOption">
                        <FaceIcon className="shareIcon" htmlColor='green'></FaceIcon>
                        <span className="shareOptionText">写真</span>
                    </div>
                    <div className="shareOption">
                        <AnalyticsIcon className="shareIcon" htmlColor='red'></AnalyticsIcon>
                        <span className="shareOptionText">写真</span>
                    </div>
                </div>
                <button className="shareButton">投稿</button>
            </div>
        </div>
    </div>
  )
}
