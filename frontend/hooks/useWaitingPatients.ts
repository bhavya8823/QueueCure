import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

const getWaitingPatients = async () => {
  const response = await api.get("/patients/waiting");
  return response.data.data;
};

export const useWaitingPatients = () => {
  return useQuery({
    queryKey: ["waiting-patients"],
    queryFn: getWaitingPatients,
  });
};
