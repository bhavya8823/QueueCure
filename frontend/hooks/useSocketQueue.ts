import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { socket } from "@/lib/socket";

export const useSocketQueue = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket Connected:", socket.id);
    });

    socket.on("queue-updated", () => {
      console.log("Queue Updated Event Received");
      queryClient.invalidateQueries();
    });

    return () => {
      socket.off("connect");
      socket.off("queue-updated");
    };
  }, [queryClient]);
};
