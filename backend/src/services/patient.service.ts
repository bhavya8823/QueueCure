import Patient from '../models/Patient.js'; 

const generateToken = async (): Promise<string> => {

    const lastPatient = await Patient.findOne({}).sort({ createdAt: -1 });

    if (!lastPatient) {
        return 'A001';
    }

    const lastNumber = Number(lastPatient.token.replace('A', ''));

    const nextNumber = lastNumber + 1;

    return `A${String(nextNumber).padStart(3, '0')}`;
};

interface CreatePatientDTO {
    name: string;
    phone: string;
    age: number;
    consultationType: string;
}

export const createPatientService = async (data: CreatePatientDTO) => {
    const token = await generateToken();
    const patient = await Patient.create({ ...data, 
        consultationType: data.consultationType.toLowerCase(),
        token });
    return patient;
};