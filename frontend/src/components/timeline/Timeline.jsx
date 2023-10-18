import React, { useEffect, useState } from 'react'
import "./Timeline.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import { Posts } from "../../dummyData";
import axios from "axios";
import { response } from 'express';

export default function Timeline() {
  const[posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response =await axios.get("/posts/timeline/");
      setPosts(response.data);
    };
    fetchPosts();
  },[]);
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post = {post} key={post.id}></Post>
        ))}
      </div>
    </div>
  )
}
