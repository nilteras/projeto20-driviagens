import { errors } from "../errors/errors.js";
import { travelRepository } from "../repository/travel.repository.js";


async function PostTravel(passengerId, flightId) {

   const passengerExist = await travelRepository.getPassengerDB(passengerId)
   if(!passengerExist) throw errors.notFound("Passageiro")

   const flightExist = await travelRepository.getFlightDB(flightId)
   if(!flightExist) throw errors.notFound("Vôo")

   return travelRepository.createTravelDB(passengerId, flightId)

}

export const travelService = { PostTravel }