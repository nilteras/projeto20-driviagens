import { Router } from "express";
import { createCitie } from "../controller/cities.controller.js";

const citieRouter = Router()

citieRouter.post('/cities', createCitie)

export default citieRouter