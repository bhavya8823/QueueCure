import { api } from "@/lib/api";

export const getQueueStats = async (): Promise<QueueStats> => {
  const response = await api.get("/queue/stats");

  return response.data.data;
};

export const callNextPatient = async () => {
  const response = await api.patch("/queue/call-next");
  return response.data.data;
};

export interface QueueStats {
  waiting: number;
  called: number;
  completed: number;
}
