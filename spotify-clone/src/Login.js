import React from 'react'
import './Login.css'
import { loginUrl } from './spotify.js'

function Login() {
    return (
        <div className = "login">
            {/* Spotify logo and login with spotify button */}
            <img 
                src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="" 
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
