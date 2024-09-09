import { createSlice } from '@reduxjs/toolkit'
import { IData } from '../../helpers'

interface IDataState {
    listData: IData
}

const initialState: IDataState = {
    listData: {
        success: false,
        message: '',
        data: null
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // Todas estas funciones deben ser sincronas
        addGetData: ( state, { payload = {} } ) => {
            const dataApi = payload.data
            const datos = {
                success: dataApi.success,
                message: dataApi.message,
                data: dataApi.data
            }
            state.listData = datos
        }
    }
})


// Action creators are generated for each case reducer function
export const { addGetData } = dataSlice.actions