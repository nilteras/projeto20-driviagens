import httpStatus from "http-status"
import { flightService } from "../service/flight.service.js"


export async function CreateFlight(req, res) {

  const { origin, destination, date } = req.body

  await flightService.PostFlight(origin, destination, date)

  res.sendStatus(httpStatus.CREATED)

}