import { Request, Response } from 'express';
import { callNextPatientService, getCurrentPatientService, getQueueStatsService } from '../services/queue.service.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import { io } from "../server.js";

export const callNextPatient = asyncHandler(async (req: Request, res: Response) => {
    const patient = await callNextPatientService();

    if (!patient) {
        throw new ApiError(404, 'No waiting patients found');
    }

    io.emit("queue-updated");

    return res.status(200).json(
        new ApiResponse('Next patient called successfully', patient)
    );
});

export const getCurrentPatient = asyncHandler(async (req: Request, res: Response) => {
    const patient = await getCurrentPatientService();

    return res.status(200).json(
        new ApiResponse('Current patient fetched successfully', patient)
    );
});

export const getQueueStats = asyncHandler(async (req: Request, res: Response) => {
    const stats = await getQueueStatsService();

    return res.status(200).json(
        new ApiResponse('Queue stats fetched successfully', stats)
    );
}); 