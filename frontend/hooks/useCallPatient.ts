"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { callPatient } from "@/services/patient.service";

export const useCallPatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: callPatient,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["patients"],
      });

      queryClient.invalidateQueries({
        queryKey: ["queue-stats"],
      });
    },
  });
};
