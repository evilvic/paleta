import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context.js'
import { Navbar, LogoutButton } from '../style/components'

const NavBar = () => (

    <MyContext.Consumer>
        {context => (
            <Navbar>
                <NavLink to='/'>
                    <p>paleta</p>
                </NavLink>
                <section>
                    <div className='left'>
                        <NavLink to='/gallery'>GALLERY</NavLink>
                        <NavLink to='/playground'>PLAYGROUND</NavLink>
                    </div>
                    <div className='right'>
                        {!context.state.isLoggedIn && (
                        <>
                            <NavLink to='/login'>LOG IN</NavLink>
                            <NavLink 
                            to='/signup'
                            style={{
                                background: 'rgb(255,133,82)'
                            }}
                            >SIGN UP</NavLink>
                        </>
                        )}
                        {context.state.isLoggedIn && (
                        <>
                            <NavLink to='/profile'>PROFILE</NavLink>
                            <LogoutButton onClick={ context.handleLogout }>LOG OUT</LogoutButton>
                        </>
                        )}
                    </div>
                </section>
            </Navbar>
        )}
    </MyContext.Consumer>

)

export default NavBar
