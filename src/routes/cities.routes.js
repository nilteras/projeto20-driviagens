import { Router } from "express";
import { createCitie } from "../controller/cities.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { citieSchema } from "../schemas/cities.schema.js";

const citieRouter = Router()

citieRouter.post('/cities',schemaValidation(citieSchema) ,createCitie)

export default citieRouter