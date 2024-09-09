
export const getEnvVariables = () => {
    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_APP_HOST: import.meta.env.VITE_APP_HOST,
        VITE_APP_PORT: import.meta.env.VITE_APP_PORT
    }
}