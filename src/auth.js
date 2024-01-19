import axios from 'axios'

const API_URL = 'https://localhost:7038/api'

export default {
    setToken(token) {
        localStorage.setItem('token', token)
    },
    getToken() {
        return localStorage.getItem('token')
    },
    register(email, password) {
        const user = { email, password }
        return axios.post(API_URL + "/auth/register", user)
    },
    login(email, password) {
        const user = { email, password }
        return axios.post(API_URL + "/auth/login", user)
    }
}