import express from "express";
import {addSession, getSession} from "../controllers/session.controller.js";

const router = express.Router();

router.post("/", addSession);
router.get("/", getSession);


export default router;