"use client";

import { useQuery } from "@tanstack/react-query";
import { getQueueStats } from "@/services/queue.service";

export const useQueueStats = () => {
    return useQuery({
        queryKey: ["queue-stats"],
        queryFn: getQueueStats,
        refetchInterval: 5000, // Refetch every 5 seconds
    });
};