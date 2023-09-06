import { Router } from "express";

const passengersRoute = Router()

passengersRoute.post('/passengers')
passengersRoute.get('/passengers/travels')

export default passengersRoute