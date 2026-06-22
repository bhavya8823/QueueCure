import express from "express";
import { callNextPatient, getCurrentPatient, getQueueStats } from "../controllers/queue.controller.js";

const router = express.Router();

router.patch("/call-next", callNextPatient);
router.get("/current", getCurrentPatient);
router.get("/stats", getQueueStats);

export default router;  