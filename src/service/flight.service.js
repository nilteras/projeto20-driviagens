import { errors } from "../errors/errors.js";
import { flightRepository } from "../repository/flight.repository.js";

async function PostFlight(origin, destination, date) {

    const originExist = await flightRepository.getOriginDB(origin)
    const destinationExist = await flightRepository.getDestinationDB(destination)

    if(!originExist) throw errors.notFound("Cidade de origem")
    if(!destinationExist) throw errors.notFound("Cidade de destino")

    return flightRepository.createFlightDB(origin, destination, date)

}

export const flightService = { PostFlight }