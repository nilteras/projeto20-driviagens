import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repository/passenger.repository.js";


async function PostPassenger(firstName, lastName) {

    return await passengerRepository.PassengerDB(firstName, lastName)

}

async function getPassengersQtyTravelsService (name) {
    const result = await passengerRepository.getPassengersQtyTravelsDB(name)

    if(result.length > 10) throw errors.tooManyResults()

    return result
}

export const passengerService = { PostPassenger, getPassengersQtyTravelsService }