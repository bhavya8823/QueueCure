"use client";

import { useQuery } from "@tanstack/react-query";
import { getPatients } from "@/services/patient.service";

export const usePatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
    refetchInterval: 5000,
  });
};
