import axios, { AxiosInstance } from 'axios'
import { getEnvVariables } from '../helpers'

const { VITE_API_URL } = getEnvVariables()

const apptestApi: AxiosInstance = axios.create({
    baseURL: VITE_API_URL
})

// CONFIGURACION DE INTERCEPTORES, ESTO ES PROPIO DE AXIOS
// Asi se envian los headers
apptestApi.interceptors.request.use( config => {
    config.headers.set('Authorization', localStorage.getItem('token'))
    return config
})

export default apptestApi