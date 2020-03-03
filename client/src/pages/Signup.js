import React from 'react'
import { MyContext } from '../Context'
import { StyledForm } from '../style/components'

const Signup = () => (
    <MyContext.Consumer>
        {context => (
            <StyledForm>
                <div></div>
                <form  onSubmit={ context.handleSignupSubmit }>
                    <h2>Sign up</h2>
                    <label>Username</label>
                    <input
                        placeholder='username'
                        name='username'
                        type='text'
                        value={ context.state.formSignup.username }
                        onChange={ context.handleSignupInput }
                        required
                    />
                    <label>Email</label>
                    <input
                        placeholder='example@paleta.com'
                        name='email'
                        type='email'
                        value={ context.state.formSignup.email }
                        onChange={ context.handleSignupInput }
                        required
                    />
                    <label>Password</label>
                    <input
                        placeholder='●●●●●●●'
                        name='password'
                        type='password'
                        value={ context.state.formSignup.password }
                        onChange={ context.handleSignupInput }
                        required
                    />
                    <button>Sign up</button>
                </form>
            </StyledForm>
        )}
    </MyContext.Consumer>
)

export default Signup