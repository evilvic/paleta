import axios from 'axios'

const baseURL = 'http://localhost:3000/auth'

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const AUTH_SERVICE = {
    signup: async data => {
        return await MY_SERVICE.post('/signup', data)
    },
    login: async data => {
        return await MY_SERVICE.post('/login', data)
    },
    logout: async () => {
        return await MY_SERVICE.get('/logout')
    },
    getUser: async data => {
        return await MY_SERVICE.get('/user', data)
    }
}

export default AUTH_SERVICE