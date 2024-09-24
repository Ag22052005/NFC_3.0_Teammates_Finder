import express from "express";
import {getMlData} from "../controllers/ml.controller.js";
import protectRoute from "../middleware/protectRoute.middleware.js";
const router = express.Router();

router.get("/",protectRoute, getMlData);


export default router;