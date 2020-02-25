import React, { useEffect, useContext } from 'react'
import { MyContext } from '../Context'

const Profile = ({ history }) => {

    const context = useContext(MyContext)

    useEffect(() => {
        if (!context.state.isLoggedIn) return history.push('/login')
    })

    return (
        
        <MyContext.Consumer>
            {context => {

                const { isLoggedIn, loggedUser } = context.state
                
                if (isLoggedIn) 
                return (
                    <>
                        <h2>Profile</h2>
                        <h3>{ loggedUser.username }</h3>
                    </>
                )
                else return <>Loading...</>

            }}
        </MyContext.Consumer>
    )
}

export default Profile