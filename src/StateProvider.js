import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const StateContext = createContext();

// Wraps our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from DataLayer
export const useStateValue = () => useContext(StateContext);
