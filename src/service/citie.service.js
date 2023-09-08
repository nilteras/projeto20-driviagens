import { citieRepository } from "../repository/citie.repository.js";

function PostCitie(name) {

    if (!name ) {
        return res.sendStatus(400);
    }

    return citieRepository.CitieDB(name)

}

export const citieService = { PostCitie }