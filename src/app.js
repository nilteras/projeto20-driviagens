import cors from "cors";
import express from "express";
import "express-async-errors";
import router from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
});
