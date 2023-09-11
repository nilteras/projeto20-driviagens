import { errorConflitct } from "../errors/conflict.js";
import { citieRepository } from "../repository/citie.repository.js";

async function PostCitie(name) {

    const citieExist = await citieRepository.getCitieDB(name)

    if (citieExist) throw errorConflitct("Cidade")

    return citieRepository.createCitieDB(name)

}

export const citieService = { PostCitie }