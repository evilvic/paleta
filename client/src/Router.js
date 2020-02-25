import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Playground from './pages/Playground'

const NavBar = () => <h1>NavBar</h1>
const Home = () => <h1>Home</h1>
const Profile = () => <h1>Profile</h1>

const Router = () => (
    <>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/playground' component={Playground} />
        </Switch>
    </>
)

export default Router