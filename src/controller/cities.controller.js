import { citieService } from "../service/citie.service.js";

export async function createCitie (req, res){
    
    try {
      const { name } = req.body
  
      await citieService.PostCitie(name) 
  
      res.sendStatus(201)
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }