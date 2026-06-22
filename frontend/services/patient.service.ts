import { api } from "@/lib/api";

export const getPatients = async () => {
  const response = await api.get("/patients");
  return response.data.data;
};

export const callPatient = async (id: string) => {
  const response = await api.patch(`/patients/${id}/call`);
  return response.data.data;
};

export const completePatient = async (id: string) => {
  const response = await api.patch(`/patients/${id}/complete`);
  return response.data.data;
};

export const createPatient = async (patientData: {
  fullName: string;
  phone: string;
  age: string;
  consultationType: string;
}) => {
  const response = await api.post("/patients", {
    name: patientData.fullName,
    phone: patientData.phone,
    age: Number(patientData.age),
    consultationType: patientData.consultationType.toLowerCase(),
  });

  return response.data.data;
};