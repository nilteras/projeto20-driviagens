import cors from "cors";
import express from "express";
import router from "./routes/index.routes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(router)
dotenv.config()

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
