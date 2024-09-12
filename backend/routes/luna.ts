import { Router } from 'express'
import { regisLuna, getAllLuna, getLunaById, udtLuna, dltLuna } from '../controllers'

const rtrLuna = Router()

rtrLuna.post('/regluna', [], regisLuna)

rtrLuna.get('/', [], getAllLuna)

rtrLuna.get('/:id', [], getLunaById)

rtrLuna.put('/udtluna/:id', [], udtLuna)

rtrLuna.delete('/dltluna/:id', [], dltLuna)

export {
    rtrLuna
}