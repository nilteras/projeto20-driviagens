import { flightRepository } from "../repository/flight.repository.js";


function PostFlight(origin, destination, date) {

    if (!origin, !destination, !date) {
        return res.sendStatus(400);
    }

    return flightRepository.FlightDB(origin, destination, date)

}

export const flightService = { PostFlight }