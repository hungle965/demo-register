import axios from 'axios'

const API_BASE_URL = process.env.NUXT_ENV_API_BASE_URL
const DEFAULT_TIMEOUT = 10000

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
})

const checkRegisterInfo = (email = '', username = '') => {
  return new Promise((resolve, reject) => {
    const payload = { email, username }

    const path = '/user/check'

    axiosInstance
      .post(path, payload)
      .then(response => resolve(response))
      .catch(error => {
        reject(error)
      })
  })
}

const register = (username, email, password) => {
  return new Promise((resolve, reject) => {
    const payload = { email, username, password }

    const path = '/register'

    axiosInstance
      .post(path, payload)
      .then(response => resolve(response))
      .catch(error => {
        reject(error)
      })
  })
}

export default function({}, inject) {
  const api_instance = {
    checkRegisterInfo,
    register,
  }

  inject('api_instance', api_instance)
}
