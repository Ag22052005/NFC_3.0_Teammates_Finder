import express  from "express";
import { botReply } from "../controllers/messagesBot.js";

const router = express.Router();  

router.post('/bot-reply', botReply);   

export default router;