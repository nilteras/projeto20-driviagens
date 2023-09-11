import { errors } from "../errors/errors.js";
import { flightRepository } from "../repository/flight.repository.js";

let inputDate = null

async function validateFlightDate(date) {
    const currentDate = new Date();
    const dateParts = date.split("-");
    inputDate = new Date(
        `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
    );
    const timeDifference = inputDate - currentDate;

    if (timeDifference <= 0) throw errors.unprocessableEntity('A data do voo deve ser maior do que a data atual')
}

async function PostFlight(origin, destination, date) {

    if (origin === destination) throw errors.errorConflitct("Cidades com o mesmo nome")

    const originExist = await flightRepository.getOriginDB(origin)
    const destinationExist = await flightRepository.getDestinationDB(destination)

    if (!originExist) throw errors.notFound("Cidade de origem")
    if (!destinationExist) throw errors.notFound("Cidade de destino")


    return flightRepository.createFlightDB(origin, destination, date)

}

export const flightService = { PostFlight, validateFlightDate }