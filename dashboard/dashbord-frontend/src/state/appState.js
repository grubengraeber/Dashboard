import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

export const appContext = createContext();

const ReactStateProvider = appContext.Provider;
export const StateConsumer = appContext.Consumer;


export const useAppState = () => {
    return useContext(appContext)
};


export const StateProvider = ({ value, children }) => {
    const [state, setState] = useState(value);


    return (
        <ReactStateProvider children={children}
            value={
                {
                    state,
                    setState
                }
            } />


    )



};




