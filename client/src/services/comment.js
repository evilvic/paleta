import axios from 'axios'

const baseURL = `${import.meta.env.VITE_SERVER_ENDPOINT}/comments`

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const COMMENTS_SERVICE = {
    getAll: async () => {
        return await MY_SERVICE.get('/')
    },
    create: async data => {
        return await MY_SERVICE.post('/new', data)
    }
}

export default COMMENTS_SERVICE
