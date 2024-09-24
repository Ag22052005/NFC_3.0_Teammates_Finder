import express from "express";
import protectRoute from "../middleware/protectRoute.middleware.js";
import { getUsersForSidebar, getGameInfo, addGameInfo, getMatchMaking,getFriends,setFriendRequest} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar);

//for gameinfo
router.get("/game-info",protectRoute,getGameInfo);
router.post("/game-info",protectRoute,addGameInfo);
router.get("/match-making",protectRoute,getMatchMaking);

//for requests
router.get("/friends",protectRoute,getFriends);
router.post("/requests/:Id",protectRoute,setFriendRequest);
export default router;