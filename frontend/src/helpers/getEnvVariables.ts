
export const getEnvVariables = () => {
    return {
        VITE_APP_HOST: import.meta.env.VITE_SERVER_NAME,
        VITE_APP_PORT: import.meta.env.VITE_APP_PORT,
        VITE_API_URL: import.meta.env.VITE_API_URL
    }
}