import axios from 'axios'

const baseURL = `${process.env.REACT_APP_SERVER_ENDPOINT}/projects`

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const PROJECTS_SERVICE = {
    getAll: async () => {
        return await MY_SERVICE.get('/')
    },
    create: async data => {
        return await MY_SERVICE.post('/new', data)
    },
    getOne: async id => {
        return await MY_SERVICE.get(`/${id}`)
    },
    delete: async id => {
        return await MY_SERVICE.delete(`/${id}`)
    }
}

export default PROJECTS_SERVICE