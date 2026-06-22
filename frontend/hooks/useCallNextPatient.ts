"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { callNextPatient } from "@/services/queue.service";

export const useCallNextPatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: callNextPatient,

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
