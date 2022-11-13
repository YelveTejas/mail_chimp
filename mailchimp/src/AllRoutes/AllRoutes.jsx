import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Media from '../Pages/Media'
import Plans from '../Pages/Plans'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/media/:id' element={<Media/>}></Route>
            <Route path='/plans' element={<Plans/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes