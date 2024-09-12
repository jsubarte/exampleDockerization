import { apptestApi } from '../api'
import { useAppDispatch } from './hooks'
import { addPlanetData } from '../store'

export const usePlanetasStore = () => {
    const dispatch = useAppDispatch()

    const getPlanetData = async () => {
        try {
            const { data } = await apptestApi.get('/planeta')
            dispatch( addPlanetData( { data } ) )
        } catch (error) {
            console.log(`Error getPlanetData: ${ error }`)
        }
    }

    return {
        getPlanetData
    }
}

