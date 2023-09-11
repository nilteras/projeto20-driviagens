import { errors } from "../errors/errors.js";
import { citieRepository } from "../repository/citie.repository.js";

async function PostCitie(name) {

    const citieExist = await citieRepository.getCitieDB(name)

    if (citieExist) throw errors.errorConflitct("Cidade")

    return citieRepository.createCitieDB(name)

}

export const citieService = { PostCitie }