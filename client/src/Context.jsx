import React, { useState, useEffect, createContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
import PROJECTS_SERVICE from './services/project'
import COMMENTS_SERVICE from './services/comment'
import Swal from 'sweetalert2'

export const MyContext = createContext()

const MyProvider = ({ children }) => {

    const navigate = useNavigate()

    const [formSignup, setFormSignup] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [formLogin, setFormLogin] = useState({
        username: '',
        password: ''
    })

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedUser, setLoggedUser] = useState(null)
    const [gallery, setGallery] = useState(null)
    const [art, setArt] = useState(null)
    const [artComment, setArtComment] = useState('')
    const [comments, setComments] = useState(null)

    const deleteProject = async id => {
        await PROJECTS_SERVICE.delete(id)
    }

    const getArt = async id => {
        const { data: { project } } = await PROJECTS_SERVICE.getOne(id)
        setArt(project)
    }

    const updateGallery = useCallback(async () => {
        const { data } = await PROJECTS_SERVICE.getAll()
        setGallery(data.allProjects)
    }, [])

    const updateComments = useCallback(async () => {
        const { data: { allComments } } = await COMMENTS_SERVICE.getAll()
        setComments(allComments)
    }, [])

    const handleCommentInput = e => {
        const { value } = e.target
        setArtComment(value)
    }

    const handleCommentSubmit = async e => {
        e.preventDefault()
        await COMMENTS_SERVICE.create({
            content: artComment,
            project: art._id
        })
        setArtComment('')
    }

    const handleSignupInput = e => {
        const { name, value } = e.target
        setFormSignup(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSignupSubmit = e => {
        e.preventDefault()
        const { username, email, password } = formSignup

        AUTH_SERVICE.signup({ username, email, password })
            .then(() => {
                setFormSignup({
                    username: '',
                    email: '',
                    password: ''
                })
                navigate('/login')
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

    const handleLoginInput = e => {
        const { name, value } = e.target
        setFormLogin(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        const { username, password } = formLogin
        AUTH_SERVICE.login({ username, password })
            .then(({ data }) => {
                setFormLogin({
                    username: '',
                    password: ''
                })
                setLoggedUser(data.user)
                setIsLoggedIn(true)
                navigate('/profile')
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

    const handleLogout = async () => {
        await AUTH_SERVICE.logout()
        setFormSignup({
            username: '',
            email: '',
            password: ''
        })
        setFormLogin({
            username: '',
            password: ''
        })
        setIsLoggedIn(false)
        setLoggedUser(null)
        navigate('/')
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await PROJECTS_SERVICE.getAll()
            const { data: { allComments } } = await COMMENTS_SERVICE.getAll()
            setGallery(data.allProjects)
            setComments(allComments)
        }
        fetchData()
    }, [])

    const state = {
        formSignup,
        formLogin,
        isLoggedIn,
        loggedUser,
        gallery,
        art,
        artComment,
        comments
    }

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
                updateComments,
                deleteProject
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider
