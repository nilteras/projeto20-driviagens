import { passengerRepository } from "../repository/passenger.repository.js";


function PostPassenger(firstName, lastName) {

    if (!firstName || !lastName) {
        return res.sendStatus(400);
    }

    return passengerRepository.PassengerDB(firstName, lastName)

}

export const passengerService = { PostPassenger }