import { flightService } from "../service/flight.service.js"


export async function CreateFlight (req, res){
    
    try {
      const { origin, destination, date } = req.body
  
      await flightService.PostFlight(origin, destination, date)
  
      res.sendStatus(201)
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }