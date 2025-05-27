import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Create from '../Pages/Create'
import ViewPin from '../Pages/ViewPin'
import Messages from '../Pages/Messages'
import Search from '../Pages/Search'

const MainRoute = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/pin-creation-tool' element={<Create/>}/>
              <Route path='/pin/:id' element={<ViewPin/>}/>
              <Route path='/message' element={<Messages/>}/>
              <Route path='/search' element={<Search/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute