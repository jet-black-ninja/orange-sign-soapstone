import express , {Express, Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import messageRoutes from "./routes/messageRoutes";
dotenv.config();
const app: Express = express()
const port = process.env.PORT || 3000;
app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req: Request, res:Response) => {
    res.send("Express+ TypeScript Server");
})
app.use("/messages", messageRoutes);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})