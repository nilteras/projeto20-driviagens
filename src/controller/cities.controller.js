import httpStatus from "http-status";
import { citieService } from "../service/citie.service.js";

export async function createCitie(req, res) {

  const { name } = req.body

  await citieService.PostCitie(name)

  res.sendStatus(httpStatus.CREATED)
}