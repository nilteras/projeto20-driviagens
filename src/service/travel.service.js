import { travelRepository } from "../repository/travel.repository.js";


function PostTravel(passengerId, flightId) {

    if (!passengerId || !flightId) {
        return res.sendStatus(400);
    }
    

    return travelRepository.TravelDB(passengerId, flightId)

}

export const travelService = { PostTravel }