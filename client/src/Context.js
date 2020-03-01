import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
import PROJECTS_SERVICE from './services/project'
import COMMENTS_SERVICE from './services/comment'
import Swal from 'sweetalert2'

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
        loggedUser: null,
        gallery: null,
        art: null,
        artComment: '',
        comments: null
    }

    getArt = async id => {
        const { data: { project } } = await PROJECTS_SERVICE.getOne(id)
        this.setState(prevState => ({
            ...prevState,
            art: project
        }))
    }

    updateGallery = async () => {
        const {data} = await PROJECTS_SERVICE.getAll()
        this.setState(prevState => ({
            ...prevState,
            gallery: data.allProjects
        }))
    }

    updateComments = async () => {
        const {data: { allComments} } = await COMMENTS_SERVICE.getAll()
        this.setState(prevState => ({
            ...prevState,
            comments: allComments
        }))
    }

    handleCommentInput = e => {
        const { value } = e.target
        this.setState({artComment: value})
    }

    handleCommentSubmit = async e => {

        e.preventDefault()
        const { artComment, art} = this.state

        console.log(artComment, art._id)

        await COMMENTS_SERVICE.create({
            content: artComment,
            project: art._id
        })

        this.setState(prevState => ({
            ...prevState,
            artComment: ''
        }))


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
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'The username has alredy been taken',
                    showConfirmButton: false,
                    timer: 1000
                })
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
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Invalid credentials',
                    showConfirmButton: false,
                    timer: 1000
                })
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

    componentDidMount = async () => {
        const {data} = await PROJECTS_SERVICE.getAll()
        const {data: { allComments} } = await COMMENTS_SERVICE.getAll()
        this.setState(prevState => ({
            ...prevState,
            gallery: data.allProjects,
            comments: allComments
        }))
        
    }

    render() {
        
        const {
            state,
            handleSignupInput,
            handleSignupSubmit,
            handleLoginInput,
            handleLoginSubmit,
            handleLogout,
            updateGallery,
            getArt,
            handleCommentInput,
            handleCommentSubmit,
            updateComments
        } = this

        return (
            <MyContext.Provider
                value={{
                    state,
                    handleSignupInput,
                    handleSignupSubmit,
                    handleLoginInput,
                    handleLoginSubmit,
                    handleLogout,
                    updateGallery,
                    getArt,
                    handleCommentInput,
                    handleCommentSubmit,
                    updateComments
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
    
}

export default withRouter(MyProvider)