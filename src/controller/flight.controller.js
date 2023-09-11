import httpStatus from "http-status"
import { flightService } from "../service/flight.service.js"


export async function CreateFlight(req, res) {

  const { origin, destination, date } = req.body

  await flightService.validateFlightDate(date)
  await flightService.PostFlight(origin, destination, date)

  res.sendStatus(httpStatus.CREATED)

}

export async function GetFlights(req, res) {

  const { origin, destination } = req.query
  const smallerDate = req.query["smaller-date"]
  const biggerDate = req.query["bigger-date"]

  const flights = await flightService.getFlights(origin, destination, smallerDate, biggerDate)

  res.status(httpStatus.OK).send(flights.rows)
}