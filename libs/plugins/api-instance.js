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

    let path = `/user/check`

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
  }

  inject('api_instance', api_instance)
}
