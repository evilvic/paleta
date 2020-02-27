import React from 'react'
import { MyContext } from '../Context.js'

const User = () => (


    <MyContext.Consumer>
        {context => (
            <>
            <p>Holi, pozoli</p>
            {(context.state.loggedUser !== null) && <p>{context.state.loggedUser._id}</p>}
            </>
        )}
    </MyContext.Consumer>
)

export default User
