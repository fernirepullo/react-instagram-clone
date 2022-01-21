import { Avatar } from '@mui/material';
import React from 'react';
import '../CSS/Post.css'

const Post = ({ usuario, textoPost, imagenUrl, imagenAvatar }) => {
  return <>
    <div className="post">

      <div className="post__header">

        <Avatar
          className="post__avatar"
          alt="prueba"
          src={imagenAvatar}
        />

        <h3>{usuario}</h3>

      </div>

      <img className="post__image" src={imagenUrl} alt="" />

      <h3 className="post__texto"> <strong>{usuario} </strong> {textoPost}</h3>

    </div>;

  </>

};

export default Post