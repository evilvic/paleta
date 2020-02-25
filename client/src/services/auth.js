import axios from 'axios'

const baseURL = 'http://localhost:3000'

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const AUTH_SERVICE = {
    signup: async data => {
        return await MY_SERVICE.post('/auth/signup', data)
    },
    login: async data => {
        return await MY_SERVICE.post('/auth/login', data)
    }
}

export default AUTH_SERVICE