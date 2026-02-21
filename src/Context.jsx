import React, { useState, useEffect, useRef, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useConvexAuth } from 'convex/react'
import { useConvex } from 'convex/react'
import { useAuthActions } from '@convex-dev/auth/react'
import { api } from '../convex/_generated/api'
import Swal from 'sweetalert2'

export const MyContext = createContext()

const MyProvider = ({ children }) => {

    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useConvexAuth()
    const { signIn, signOut } = useAuthActions()

    const convex = useConvex()
    const loggedUser = useQuery(api.users.currentUser)
    const gallery = useQuery(api.projects.list)
    const comments = useQuery(api.comments.list)

    const createProject = useMutation(api.projects.create)
    const removeProject = useMutation(api.projects.remove)
    const createComment = useMutation(api.comments.create)
    const updateProfile = useMutation(api.users.updateProfile)

    const [formSignup, setFormSignup] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    const [art, setArt] = useState(null)
    const [artComment, setArtComment] = useState('')
    const pendingUsername = useRef(null)

    useEffect(() => {
        if (isAuthenticated && pendingUsername.current) {
            const username = pendingUsername.current
            pendingUsername.current = null
            updateProfile({ username }).then(() => navigate('/profile'))
        }
    }, [isAuthenticated])

    const deleteProject = async id => {
        await removeProject({ id })
    }

    const getArt = id => {
        const project = gallery?.find(p => p._id === id)
        if (project) setArt(project)
    }

    const handleCommentInput = e => {
        const { value } = e.target
        setArtComment(value)
    }

    const handleCommentSubmit = async e => {
        e.preventDefault()
        await createComment({
            content: artComment,
            projectId: art._id
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

    const handleSignupSubmit = async e => {
        e.preventDefault()
        const { username, email, password } = formSignup
        try {
            const taken = await convex.query(api.users.isUsernameTaken, { username })
            if (taken) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Username already taken',
                    showConfirmButton: false,
                    timer: 1500
                })
                return
            }
            pendingUsername.current = username
            await signIn('password', { email, password, flow: 'signUp' })
            setFormSignup({ username: '', email: '', password: '' })
        } catch {
            pendingUsername.current = null
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Could not create account',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const handleLoginInput = e => {
        const { name, value } = e.target
        setFormLogin(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLoginSubmit = async e => {
        e.preventDefault()
        const { email, password } = formLogin
        try {
            await signIn('password', { email, password, flow: 'signIn' })
            setFormLogin({ email: '', password: '' })
            navigate('/profile')
        } catch {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid credentials',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const handleLogout = async () => {
        await signOut()
        setFormSignup({ username: '', email: '', password: '' })
        setFormLogin({ email: '', password: '' })
        navigate('/')
    }

    const state = {
        formSignup,
        formLogin,
        isLoggedIn: isAuthenticated,
        isLoading,
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
                getArt,
                handleCommentInput,
                handleCommentSubmit,
                deleteProject,
                createProject,
                updateProfile
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider
