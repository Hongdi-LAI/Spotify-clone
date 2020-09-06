import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./Datalayer";

//responsible for any react and Spotify interaction
const spotify = new SpotifyWebApi(); 

function App() {
      
    // const [token, setToken] = useState(null);
    // deconstruct the datalayer to get the user instead of doing DataLayer.user
    const [{user, token},dispatch] = useDataLayerValue();


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
        
        dispatch({
          type:'SET_TOKEN',
          //token
          token: _token,
        });

        //setToken(_token);
        //giving the token to Spotify API
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {

          dispatch({
            type: 'SET_USER',
            // in ES6 can just use 'user' instead of 'user: user'
            user: user,
          });
        });
      }
      
    },[]);

    console.log("granny", user);
    console.log("I have a token", token);
  
  return (

    <div className = "app"> 
        {
          token ? (
            <Player spotify = {spotify} />
          ) :(
            <Login />  
          )
        }     

    </div>
  );
}

export default App;
