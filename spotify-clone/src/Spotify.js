// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// redirect user to spotify for authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

// pull User back to our App Spotify-clone
//const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-clone-5603e.web.app/";
const clientId = "d059b77ccf934789bec05e76bcf7ed8d";

//Scope getting permission for the clone app to do instructions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//extract token
//http://localhost:3000/#access_token=BQD8oFFMWDFrunM7bsIDIpWE21xOPXTRUya2nY5fvg7tBli8AJ-LdY6JoDrY3-pFy2836IKE93_j5mt95354r4Rltpy-EoB4y20MgPl_9So3D2nziPx2UIspEIuxwM8lKk_z3O-pVpjc5gCjpEEtcdLcW0DuFnD_sOD782Dw0Ywvsg0YZBxPtddN&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => { 
            let parts = item.split('=');
            // parts[1] is the actual token
            // parts[0] = "#access_token"
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}


//once get authenticated, give me token 
// ${scopes.join("%20")} join everything in scopes with space ASCII code %20
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;