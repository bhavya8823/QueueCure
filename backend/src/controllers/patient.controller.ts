import { Request, Response } from 'express';
import { createPatientService } from '../services/patient.service.js';

export const createPatient = async (req: Request, res: Response) => {
    try {
        const patient = await createPatientService(req.body);
        res.status(201).json({
            success: true,
            patient,
        });
    } catch (error) {

        console.log('======Error======');
        console.error(error);
        console.log('=================');
        res.status(500).json({
            success: false,
            message: 'Unable to create patient',
        });
    }
};