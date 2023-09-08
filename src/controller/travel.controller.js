import { travelService } from "../service/travel.service.js"


export async function CreateTravel (req, res){
    
    try {
      const { passengerId, flightId } = req.body
  
      await travelService.PostTravel(passengerId, flightId)
  
      res.sendStatus(201)
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }