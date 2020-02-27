import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'

export const MyContext = createContext()

class MyProvider extends Component {

    state = {
        formSignup: {
            username: '',
            email: '',
            password: ''
        },
        formLogin: {
            username: '',
            password: ''
        },
        isLoggedIn: false,
        loggedUser: null
    }

    handleSignupInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            formSignup: {
                ...prevState.formSignup,
                [name]: value
            }
        }))
    }
    
    handleSignupSubmit = e => {

        e.preventDefault()
        const { username, email, password } = this.state.formSignup

        AUTH_SERVICE.signup({ username, email, password })
            .then(() => {
                this.setState(prevState => ({
                    ...prevState,
                    formSignup: {
                        username: '',
                        email: '',
                        password: ''
                    }
                }))
                this.props.history.push('/login')
            })
            .catch(() => {
                console.log('Something went wrong...')
            })
        
    }

    handleLoginInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            formLogin: {
                ...prevState.formLogin,
                [name]: value
            }
        }))
    }

    handleLoginSubmit = e => {

        e.preventDefault()
        const { username, password } = this.state.formLogin
        AUTH_SERVICE.login({ username, password })
            .then(({ data }) => {
                this.setState(prevState => ({
                    ...prevState,
                    formLogin: {
                        username: '',
                        password: ''
                    },
                    loggedUser: data.user,
                    isLoggedIn: true
                }))
                this.props.history.push('/profile')
            })
            .catch(() => {
                console.log('Somethinmg went wrong...')
            })

    }

    handleLogout = async e => {
        await AUTH_SERVICE.logout()
        this.setState({
            formSignup: {
                username: '',
                email: '',
                password: ''
            },
            formLogin: {
                username: '',
                password: ''
            },
            isLoggedIn: false,
            loggedUser: null
        })
        this.props.history.push('/')
    }

    render() {
        
        const {
            state,
            handleSignupInput,
            handleSignupSubmit,
            handleLoginInput,
            handleLoginSubmit,
            handleLogout
        } = this

        return (
            <MyContext.Provider
                value={{
                    state,
                    handleSignupInput,
                    handleSignupSubmit,
                    handleLoginInput,
                    handleLoginSubmit,
                    handleLogout
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
    
}

export default withRouter(MyProvider)