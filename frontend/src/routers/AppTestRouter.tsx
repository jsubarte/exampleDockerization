import { Navigate, Route, Routes } from 'react-router-dom'
import { AppTestPage } from '../apptest'

export const AppTestRouter = () => {
    return (
        <Routes>
            <Route path='/apptest' element={ <AppTestPage /> } />
            <Route path='/*' element={ <Navigate to='/apptest' /> } />
        </Routes>
    )
}