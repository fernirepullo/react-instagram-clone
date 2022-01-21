import React from 'react';
import { useEffect, useState } from 'react';
import { baseDatos } from "../Configuration/Firebase_Configuration";
import Post from '../Components/Post';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        baseDatos.collection('Posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        })

    }, []);

    return <>
        <div>
            {
                posts.map(({ id, post }) => (
                    <Post 
                    key={id} 
                    usuario={post.usuario} 
                    textoPost={post.textoPost} 
                    imagenUrl={post.imagenUrl} 
                    imagenAvatar={post.imagenAvatar} 
                    />

                ))
            }
        </div>
    </>
};

export default Feed;