import { Router } from "express";
import { CreateFlight, GetFlights } from "../controller/flight.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { flightSchema } from "../schemas/flights.schema.js";

const flightsRouter = Router()

flightsRouter.post('/flights',schemaValidation(flightSchema), CreateFlight)
flightsRouter.get('/flights', GetFlights)

export default flightsRouter