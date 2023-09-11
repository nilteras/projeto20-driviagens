import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { travelSchema } from "../schemas/travels.schema.js";
import { CreateTravel } from "../controller/travel.controller.js";

const travelRouter = Router()

travelRouter.post('/travels', schemaValidation(travelSchema), CreateTravel)

export default travelRouter