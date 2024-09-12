import { Router } from 'express'
import { regisTipoPlaneta, getAllTipoPlaneta, getTipoPlanetaById, udtTipoPlaneta, dltTipoPlaneta } from '../controllers'

const rtrTipoPlaneta = Router()

rtrTipoPlaneta.post('/regtipoplaneta', [], regisTipoPlaneta)

rtrTipoPlaneta.get('/', [], getAllTipoPlaneta)

rtrTipoPlaneta.get('/:id', [], getTipoPlanetaById)

rtrTipoPlaneta.put('/udttipoplaneta/:id', [], udtTipoPlaneta)

rtrTipoPlaneta.delete('/dlttipoplaneta/:id', [], dltTipoPlaneta)

export {
    rtrTipoPlaneta
}