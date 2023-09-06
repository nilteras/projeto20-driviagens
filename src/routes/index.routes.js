import { Router } from "express";
import citieRouter from "./cities.routes.js";
import passengersRoute from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";
import travelRouter from "./travels.routes.js";

const router = Router()

router.use(citieRouter)
router.use(passengersRoute)
router.use(flightsRouter)
router.use(travelRouter)

export default router