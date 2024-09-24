import express from 'express'
import { cocData, ffData, pubgData,cocDataUsers,ffDataUsers, pubgDataUsers } from '../controllers/games.controller.js'
const router = express.Router() 
router.get(`/coc/:Id`, cocData)
router.get(`/ff/:Id`, ffData)
router.get(`/pubg/:Id`, pubgData)
router.get(`/coc`, cocDataUsers)
router.get(`/ff`, ffDataUsers)
router.get(`/pubg`, pubgDataUsers)
export default router   


