import { Router } from 'express'
import { regisPlaneta, getAllPlaneta, getPlanetaById, udtPlaneta, dltPlaneta } from '../controllers'

const rtrPlaneta = Router()

rtrPlaneta.post('/regplaneta', [], regisPlaneta)

rtrPlaneta.get('/', [], getAllPlaneta)

rtrPlaneta.get('/:id', [], getPlanetaById)

rtrPlaneta.put('/udtplaneta/:id', [], udtPlaneta)

rtrPlaneta.delete('/dltplaneta/:id', [], dltPlaneta)

export {
    rtrPlaneta
}