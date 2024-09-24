import express from 'express';
import { upload } from '../middleware/multer.middleware.js'; 
import protectRoute from "../middleware/protectRoute.middleware.js";
import { uploadCoverImage, uploadProfilePic } from "../controllers/upload.controller.js";

const router = express.Router();


router.post("/upload-cover", protectRoute,upload.single('coverImage'), uploadCoverImage);
router.post("/upload-profile-pic", protectRoute, upload.single('profilePic'), uploadProfilePic);

export default router;