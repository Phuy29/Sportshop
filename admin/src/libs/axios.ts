import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/admin',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.token = token
  }
  config.headers.Accept = 'application/json'
  return config
})

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.error(err.response.data || err.message)
    return Promise.reject(err)
  }
)
