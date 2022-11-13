import React from 'react'
import { useContext } from 'react'
import {ApiContext} from '../components/AuthContext.jsx/ApiContext'
const Privateroute = () => {
    const {state,dispatch} = useContext(ApiContext)
  return (
    <div>Privateroute</div>
  )
}

export default Privateroute