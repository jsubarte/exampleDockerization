import { createSlice } from '@reduxjs/toolkit'
import { IPlanet } from '../../helpers'

interface IDataState {
    listPlanet: IPlanet[]
}

const initialState: IDataState = {
    listPlanet: []
}

export const planetSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {
        // Todas estas funciones deben ser sincronas
        addPlanetData: ( state, { payload = {} } ) => {
            const planetApi = payload.data
            const planeta = {
                id: planetApi.id,
                nombre: planetApi.nombre,
                tipoID: planetApi.tipoID,
                diametroKm: planetApi.diametroKm,
                masaKm: planetApi.masaKm,
                distanciaSolKm: planetApi.distanciaSolKm
            }
            const exist = state.listPlanet.some(e => e.id === planeta.id)
            !exist && state.listPlanet.push(planeta)
        }
    }
})


// Action creators are generated for each case reducer function
export const { addPlanetData } = planetSlice.actions