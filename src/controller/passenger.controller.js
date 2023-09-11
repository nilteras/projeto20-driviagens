import httpStatus from "http-status";
import { passengerService } from "../service/passenger.service.js";

export async function createPassenger(req, res) {

  const { firstName, lastName } = req.body

  await passengerService.PostPassenger(firstName, lastName)

  res.sendStatus(httpStatus.CREATED)
}

export async function getPassengersQtyTravels (req, res) {
  const name = req.query.name || ""

  const passengers = await passengerService.getPassengersQtyTravelsService(name)

  res.status(httpStatus.OK).send(passengers)
  
}