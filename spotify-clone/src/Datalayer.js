import React, 
{ createContext, 
 useContext,
 useReducer }  
 from 'react'

export const DataLayerContext = createContext();

// children here is the <App /> in the index.js,
// or anything wrapped in the <DataLayer> <DataLayer />
export const DataLayer = ({ initialState, reducer,children }) => (
        <DataLayerContext.Provider value = {useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>

)

export const useDataLayerValue = () => useContext(DataLayerContext);

