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
    const [{user, token, discover_weekly},dispatch] = useDataLayerValue();


    // Run code based on a given condition
    // if run once, then '[]' can be empty
    // if run everytime when App.js loads with certain variable xx, can be [name, age, time]
      
    useEffect(() =>{
      // get token
      const hash = getTokenFromUrl();
      // clear token history
      // url will become: "http://localhost:3000/#"
      // window.location.hash = "";
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

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

        spotify.getPlaylist('37i9dQZEVXcIrudi49hDJg').then((response) => 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );

      }
    },[]);

    //console.log("granny", user);
    //console.log("discover weekly", discover_weekly);
  
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
