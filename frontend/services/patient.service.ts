import { api } from "@/lib/api";

export const getPatients = async () => {
  const response = await api.get("/patients");

  return response.data.data;
};
