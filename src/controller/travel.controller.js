import httpStatus from "http-status"
import { travelService } from "../service/travel.service.js"


export async function CreateTravel(req, res) {
  
  const { passengerId, flightId } = req.body

  await travelService.PostTravel(passengerId, flightId)

  res.sendStatus(httpStatus.CREATED)

}