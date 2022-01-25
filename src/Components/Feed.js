import React from 'react';
import { useEffect, useState } from 'react';
import { baseDatos, auth } from "../Configuration/Firebase_Configuration";
import { signOut } from '@firebase/auth';
import Post from '../Components/Post';
import { useNavigate } from 'react-router';

const Feed = () => {

    let navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        baseDatos.collection('Posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        })

    }, []);

    const salir = (event) => {

        event.preventDefault();

        signOut(auth).then(() => {

            console.log("Cerrando Sesión.");
            navigate('/');
        })
    }

    return <>

        <div>
        <h3>Conectado como: <strong>{auth.currentUser.email}</strong></h3>
        <button className="form-btn" type="submit" onClick={salir}>
            Cerrar Sesi&oacute;n
        </button>
        </div>
        
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