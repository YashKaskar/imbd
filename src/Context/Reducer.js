import React, { useContext, useReducer, createContext } from "react";
import { initalState } from './InitalState';


export const StateContext = createContext();
export const StateProvider = (reducer, initalState, children) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
