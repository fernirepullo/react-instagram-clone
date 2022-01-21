import { Avatar } from '@mui/material';
import React from 'react';
import Image from '../Images/img1.jpg'
import '../CSS/Post.css'

const Post = ({ usuario, textoPost, imagenUrl }) => {
  return <>
    <div className="post">

      <div className="post__header">

        <Avatar
          className="post__avatar"
          alt="prueba"
          src={Image}
        />

        <h3>{usuario}</h3>

      </div>

      <img className="post__image" src={imagenUrl} alt="" />

      <h3 className="post__texto"> <strong>{usuario} </strong> {textoPost}</h3>

    </div>;

  </>

};

export default Post