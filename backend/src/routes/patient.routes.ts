import express from "express";
import { createPatient, getAllPatients, getWaitingPatients, callPatient, completePatient } from "../controllers/patient.controller.js"; 
import validate from "../middleware/validate.js";  
import { createPatientSchema } from "../validators/patient.validator.js";

const router = express.Router();

router.post("/", validate(createPatientSchema), createPatient);
router.get("/", getAllPatients);
router.get("/waiting", getWaitingPatients);
router.patch("/:id/call/", callPatient);
router.patch("/:id/complete/", completePatient);

export default router;