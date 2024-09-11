import express from "express";
import {getMessage, postMessage} from "../controllers/messageController";
const router = express.Router();

router.route("/" ).get(getMessage).post(postMessage);
export default router;