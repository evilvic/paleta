import axios from 'axios'

const baseURL = 'http://localhost:3000/projects'

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const PROJECTS_SERVICE = {
    getAll: async data => {
        return await MY_SERVICE.get('/', data)
    },
    create: async data => {
        return await MY_SERVICE.post('/new', data)
    }
}

export default PROJECTS_SERVICE