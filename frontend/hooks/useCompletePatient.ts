"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completePatient } from "@/services/patient.service";
import { toast } from "sonner";


export const useCompletePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completePatient,

    onSuccess: () => {
        toast.success("Consultation completed");
        
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
