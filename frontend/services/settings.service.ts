import { api } from "@/lib/api";

export const getSettings = async () => {
  const response = await api.get("/settings");
  return response.data.data;
};

export const updateSettings = async (avgConsultationTime: number) => {
  const response = await api.patch("/settings", {
    avgConsultationTime,
  });

  return response.data.data;
};
