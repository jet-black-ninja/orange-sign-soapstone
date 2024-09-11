import express , {Express, Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app: Express = express()
const port = process.end.PORT || 3000;
app.use(cors({origin: ""}))