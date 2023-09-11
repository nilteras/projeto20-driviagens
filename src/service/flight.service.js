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

async function getFlights(origin, destination, smallerDate, biggerDate) {

    if ((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) throw errors.unprocessableEntity("smaller-date e bigger-date devem ser passados juntos");

    if (smallerDate && biggerDate) {
        const smallerParts = smallerDate.split("-")
        const smallerDay = Number(smallerParts[0])
        const smallerMonth = Number(smallerParts[1] - 1)
        const smalleryear = Number(smallerParts[2])

        const biggerParts = biggerDate.split("-")
        const biggerDay = Number(biggerParts[0])
        const biggerMonth = Number(biggerParts[1] - 1)
        const biggeryear = Number(biggerParts[2])

        if (biggeryear < smalleryear) throw errors.badRequest("bigger-date não pode ser menor que smaller-date");
        if (biggeryear === smalleryear && biggerMonth < smallerMonth) throw errors.badRequest("bigger-date não pode ser menor que smaller-date");
        if (biggeryear === smalleryear && biggerMonth === smallerMonth && biggerDay < smallerDay) throw errors.badRequest("bigger-date não pode ser menor que smaller-date");
    }


    const flights = await flightRepository.getFlightsDB(origin, destination, smallerDate, biggerDate)
    console.log(flights)
    return flights
}

export const flightService = { PostFlight, validateFlightDate, getFlights }