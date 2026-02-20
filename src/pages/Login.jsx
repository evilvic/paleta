import React, { useContext } from 'react'
import { MyContext } from '../Context'
import { StyledForm } from '../style/components'

const Login = () => {
    const context = useContext(MyContext)

    return (
        <StyledForm>
            <div></div>
            <form onSubmit={context.handleLoginSubmit}>
                <h2>Log in</h2>
                <label htmlFor='login-email'>Email</label>
                <input
                    id='login-email'
                    placeholder='example@paleta.com'
                    name='email'
                    type='email'
                    value={context.state.formLogin.email}
                    onChange={context.handleLoginInput}
                    required
                />
                <label htmlFor='login-password'>Password</label>
                <input
                    id='login-password'
                    placeholder='●●●●●●●'
                    name='password'
                    type='password'
                    value={context.state.formLogin.password}
                    onChange={context.handleLoginInput}
                    required
                />
                <button>Log in</button>
            </form>
        </StyledForm>
    )
}

export default Login
