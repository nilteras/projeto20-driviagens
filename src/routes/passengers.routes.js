import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { passengerSchema } from "../schemas/passengers.schema.js";
import { createPassenger, getPassengersQtyTravels } from "../controller/passenger.controller.js";

const passengersRoute = Router()

passengersRoute.post('/passengers', schemaValidation(passengerSchema), createPassenger)
passengersRoute.get('/passengers/travels', getPassengersQtyTravels)

export default passengersRoute