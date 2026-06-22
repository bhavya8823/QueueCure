import Patient from '../models/Patient.js'; 
import { CreatePatientDTO } from '../types/patient.types.js';

const generateToken = async (): Promise<string> => {

    const lastPatient = await Patient.findOne({}).sort({ createdAt: -1 });

    if (!lastPatient) {
        return 'A001';
    }

    const lastNumber = Number(lastPatient.token.replace('A', ''));

    const nextNumber = lastNumber + 1;

    return `A${String(nextNumber).padStart(3, '0')}`;
};


export const createPatientService = async (data: CreatePatientDTO) => {
    const token = await generateToken();
    const patient = await Patient.create({ ...data, 
        consultationType: data.consultationType.toLowerCase(),
        token });
    return patient;
};

export const getAllPatientsService = async () => {
    const patients = await Patient.find().sort({ createdAt: 1 });
    return patients;
};

export const getWaitingPatientsService = async () => {
    const patients = await Patient.find({ status: 'waiting' }).sort({ createdAt: 1 });
    return patients;
}; 

export const callPatientService = async (id: string) => {
    const patient = await Patient.findByIdAndUpdate(id, { status: 'called' }, { new: true });
    return patient;
}; 

export const completePatientService = async (id: string) => {
  const patient = await Patient.findByIdAndUpdate(
    id,
    { status: "completed" },
    { new: true },
  );

  return patient;
}; 
