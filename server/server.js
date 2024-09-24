import 'dotenv/config'
import express from "express";
import cors from "cors";
import { app,server } from './socket/socket.js';
import connectDb from "./db/db_connect.js";
import gamesRoutes from "./routes/games.route.js";
import authRoutes from "./routes/auth.route.js"
import sessionRoutes from "./routes/session.route.js"
import uploadRoutes from "./routes/upload.route.js";
import userRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/message.route.js";
import messageBotRoutes from "./routes/messagesBot.route.js";
import mlRoutes from "./routes/ml.route.js";

const PORT = process.env.PORT || 3000;
 
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}));

app.use("/api/auth",authRoutes);
app.use("/api/uploads",uploadRoutes);
app.use("/api/users",userRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/games",gamesRoutes);
app.use("/api/message", messageBotRoutes);
app.use("/api/sessions",sessionRoutes)
app.use("/api/ml", mlRoutes);
app.get("/",(req,res)=>{
  res.json({message: "Hello world"});
})

server.listen(PORT,()=>{
  connectDb();
  console.log(`Server is running on port ${PORT}`);
})
