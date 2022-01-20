import React from 'react'
//import Firebase_Login from '../Configuration/Firebase_Login';
import Box from '@mui/material/Box'
import { Button, TextField } from '@mui/material';
import Login_Image from '../Images/login_telefonos.png';

const Login = () => {
    return (

        <div className="login-div">
            
            <div className ="login__img">

            <img
            
            className ="login__img"
            src={Login_Image}
            alt="login_telefonos"
        
            />

            </div>
            
            <Box 
            component = "form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete = "off">

                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    placeholder="Introduzca el usuario"/>
                
                <TextField
                    required
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"/>

            </Box>

            <Button id="login-button" variant="contained" href="#">Iniciar Sesi&oacute;n</Button>
            
        </div>
    )
}

export default Login;