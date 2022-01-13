import React from 'react'
//import Firebase_Login from '../Configuration/Firebase_Login';
import Box from '@mui/material/Box'
import { Button, TextField } from '@mui/material';

const Login = () => {
    return (

        <div id = "login-div">
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