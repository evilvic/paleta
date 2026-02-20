import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Playground from './pages/Playground'
import Gallery from './pages/Gallery'
import Detail from './pages/Detail'
import Home from './pages/Home'

const Router = () => (
    <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='/detail' element={<Detail />} />
        </Routes>
    </>
)

export default Router
