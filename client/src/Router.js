import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Playground from './pages/Playground'
import Gallery from './pages/Gallery'

const Home = () => <h1>Home</h1>

const Router = () => (
    <>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/playground' component={Playground} />
        </Switch>
    </>
)

export default Router