import axios from 'axios'

const baseURL = 'http://localhost:3000/comments'

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