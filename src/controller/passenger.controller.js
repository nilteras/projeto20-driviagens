import { passengerService } from "../service/passenger.service.js";

export async function createPassenger(req, res){
    
    try {
      const { firstName, lastName } = req.body
  
      await passengerService.PostPassenger(firstName, lastName)
  
      res.sendStatus(201)
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }