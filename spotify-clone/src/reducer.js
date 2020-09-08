export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //debugging purpose, set the token to already authenticated one
    //REMOVE after debugging and CHANGE to null
    //token: 'BQAH-0NNlko7g3yjDSjxJNkOnr21xxG_Lisnq6T-47WrBvjdc1…Tce0s2ubS7epVmrpe7ptUvpH5uB6megAq6StuMUrjZtCDbemQ',
};

// it takes the state of data layer (how it currently looks) and 
// a manipulative action of what the 
// data layer could look like (set different valur for the value in the state)
const reducer = (state, action) => {
    // debugging 
    console.log(action);
    
    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                // ...state keeps the current state
                ...state,
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        // when there are unrecognised/ unlistened cases
        // returns default so it wont be broken
        default: 
            return state;
    }


}

export default reducer;