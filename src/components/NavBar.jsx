import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context'
import { Navbar, LogoutButton } from '../style/components'

const NavBar = () => {
    const context = useContext(MyContext)

    return (
        <Navbar>
            <article>
                <NavLink to='/'>
                    <img src='https://res.cloudinary.com/evilvic/image/upload/v1582908337/paleta/paleta_logo.png' alt='paleta logo' />
                    <p>paleta</p>
                </NavLink>
            </article>
            <section>
                <div className='left'>
                    <NavLink to='/playground'>PLAYGROUND</NavLink>
                    <NavLink to='/gallery'>GALLERY</NavLink>
                </div>
                <div className='right'>
                    {!context.state.isLoggedIn && (
                        <>
                            <NavLink to='/login'>LOG IN</NavLink>
                            <NavLink
                                to='/signup'
                                style={{
                                    background: 'rgb(285,151,192)',
                                    color:'rgb(253,253,253)'
                                }}
                            >SIGN UP</NavLink>
                        </>
                    )}
                    {context.state.isLoggedIn && (
                        <>
                            <NavLink to='/profile'>PROFILE</NavLink>
                            <LogoutButton onClick={context.handleLogout}>LOG OUT</LogoutButton>
                        </>
                    )}
                </div>
            </section>
        </Navbar>
    )
}

export default NavBar
