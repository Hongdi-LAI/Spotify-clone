import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';

//responsible for any react and Spotify interaction
const spotify = new SpotifyWebApi(); 

function App() {
      
    const [token, setToken] = useState(null);

    // Run code based on a given condition
    // if run once, then '[]' can be empty
    // if run everytime when App.js loads with certain variable xx, can be [name, age, time]
      
    useEffect(() =>{
      // get token
      const hash = getTokenFromUrl();

      // clear token history
      // url will become: "http://localhost:3000/#"
      window.location.hash = "";

      //temp token
      const _token = hash.access_token;

      if(_token) {
        setToken(_token);
        
        //giving the token to Spotify API
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {
          //console.log("granny", user);

        })
      }

      

      
      

    },[]);
  
  return (

    <div className = "app"> 
        {
          token ? (
            <Player />
          ) :(
            <Login />  
          )
        }     

    </div>
  );
}

export default App;
