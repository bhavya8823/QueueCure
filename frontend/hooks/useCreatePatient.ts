"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPatient } from "@/services/patient.service";

export const useCreatePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPatient,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patients"],
      });

      queryClient.invalidateQueries({
        queryKey: ["queue-stats"],
      });

      queryClient.invalidateQueries({
        queryKey: ["current-patient"],
      });

      queryClient.invalidateQueries({
        queryKey: ["waiting-patients"],
      });
    },
  });
};
