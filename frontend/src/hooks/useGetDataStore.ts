import { apptestApi } from '../api'
import { useAppDispatch } from './hooks'
import { addGetData } from '../store'


export const useGetDataStore = () => {
    const dispatch = useAppDispatch()

    const getDataTest = async () => {
        try {
            const { data } = await apptestApi.get('/test')
            dispatch( addGetData( { data } ) )
        } catch (error) {
            console.log(`Error getDataTest: ${ error }`)
        }
    }

    return {
        getDataTest
    }
}
