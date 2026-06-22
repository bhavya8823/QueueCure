import { useQuery } from "@tanstack/react-query";
import { getCurrentPatient } from "@/services/queue.service";

export const useCurrentPatient = () => {
  return useQuery({
    queryKey: ["current-patient"],
    queryFn: getCurrentPatient,
  });
};
