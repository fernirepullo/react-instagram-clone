import { Avatar } from '@mui/material';
import React from 'react';
import Image from '../Images/img1.jpg'
import '../CSS/Post.css'

const Post = () => {
  return <div className="post">

    <div className="post__header">

        <Avatar
            className="post__avatar"
            alt="prueba"
            src={Image}
        />

        <h3>Prueba</h3>
    </div>



  </div>;
};

export default Post