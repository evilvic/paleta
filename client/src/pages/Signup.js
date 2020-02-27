import React from 'react'
import { MyContext } from '../Context'
import { StyledForm } from '../style/components'

const Signup = () => (
    <MyContext.Consumer>
        {context => (
            <StyledForm>
                <div></div>
                <form  onSubmit={ context.handleSignupSubmit }>
                    <h2>Signup</h2>
                    <label>Username</label>
                    <input
                        placeholder='username'
                        name='username'
                        type='text'
                        value={ context.state.formSignup.username }
                        onChange={ context.handleSignupInput }
                    />
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={ context.state.formSignup.email }
                        onChange={ context.handleSignupInput }
                    />
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                        value={ context.state.formSignup.password }
                        onChange={ context.handleSignupInput }
                    />
                    <button> Signup </button>
                </form>
            </StyledForm>
        )}
    </MyContext.Consumer>
)

export default Signup