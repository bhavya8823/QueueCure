import { api } from "@/lib/api";

export const getQueueStats = async (): Promise<QueueStats> => {
  const response = await api.get("/queue/stats");

  console.log("FULL RESPONSE", response.data);

  return response.data.data;
};

export interface QueueStats {
  waiting: number;
  called: number;
  completed: number;
}
