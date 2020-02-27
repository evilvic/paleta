import React from 'react'
import { MyContext } from '../Context'
import { StyledForm } from '../style/components'

const Login = () => (
    <MyContext.Consumer>
        {context => (
            <StyledForm>
                <div></div>
                <form  onSubmit={ context.handleLoginSubmit }>
                    <h2>Login</h2>
                    <label>Username</label>
                    <input
                        placeholder='username'
                        name='username'
                        type='text'
                        value={ context.state.formLogin.username }
                        onChange={ context.handleLoginInput }
                    />
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                        value={ context.state.formLogin.password }
                        onChange={ context.handleLoginInput }
                    />
                    <button> Login </button>
                </form>
            </StyledForm>
        )}
    </MyContext.Consumer>
)

export default Login