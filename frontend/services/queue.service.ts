import { api } from "@/lib/api";

export const getQueueStats = async (): Promise<QueueStats> => {
  console.log("Fetching queue stats...");

  const response = await api.get("/queue/stats");

  console.log("Queue Stats Response:", response.data);

  return response.data.data;
};

export const callNextPatient = async () => {
  const response = await api.patch("/queue/call-next");
  return response.data.data;
};

export const getCurrentPatient = async () => {
  const response = await api.get("/queue/current");
  return response.data.data;
};

export interface QueueStats {
  waiting: number;
  called: number;
  completed: number;
}
