"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "@/services/settings.service";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSettings,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
  });
};
