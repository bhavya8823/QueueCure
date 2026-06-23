import { Request, Response } from 'express';
import { createPatientService, getAllPatientsService, getWaitingPatientsService, callPatientService, completePatientService } from '../services/patient.service.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import { io } from "../server.js";

export const createPatient = asyncHandler(async (req, res) => {
    const patient = await createPatientService(req.body);

    io.emit("queue-updated");

    return res.status(201).json(
        new ApiResponse('Patient created successfully', patient)
    );
}
);

export const getAllPatients = asyncHandler(async (req, res) => {
    const patients = await getAllPatientsService();

    return res.status(200).json(
        new ApiResponse('Patients fetched successfully', patients)
    );
}
);

export const getWaitingPatients = asyncHandler(async (req, res) => {
    const patients = await getWaitingPatientsService();

    return res.status(200).json(
        new ApiResponse('Waiting patients fetched successfully', patients)
    );
}
);

export const callPatient = asyncHandler(async (req, res) => {
    const patient = await callPatientService(req.params.id as string);

    io.emit("queue-updated");

    return res.status(200).json(
        new ApiResponse('Patient called successfully', patient)
    );
}
);

export const completePatient = asyncHandler(async (req, res) => {
    const patient = await completePatientService(req.params.id as string);

    io.emit("queue-updated");

    return res.status(200).json(
        new ApiResponse('Patient completed successfully', patient)
    );
}
);