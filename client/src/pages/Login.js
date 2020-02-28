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
                        placeholder='evilvic'
                        name='username'
                        type='text'
                        value={ context.state.formLogin.username }
                        onChange={ context.handleLoginInput }
                        required
                    />
                    <label>Password</label>
                    <input
                        placeholder='●●●●●●●'
                        name='password'
                        type='password'
                        value={ context.state.formLogin.password }
                        onChange={ context.handleLoginInput }
                        required
                    />
                    <button> Login </button>
                </form>
            </StyledForm>
        )}
    </MyContext.Consumer>
)

export default Login