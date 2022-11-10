import React, { useState } from 'react'
import { useReducer } from 'react'
import {reducer} from './reducer'
import { createContext } from 'react'

const initial={
    isauth:false,
    loading:false,
    token:'',
    error:false
}

export const Apicontext = createContext()
export const Auth = ({children}) => {
 const [state,dispatch] = useReducer(reducer,initial)

  return (
    <Apicontext.Provider value={{state,dispatch}}>{children}</Apicontext.Provider>
  )
}

export default Auth