// //
// import { io } from "socket.io-client";

// console.log("SOCKET URL:", process.env.NEXT_PUBLIC_SOCKET_URL);

// export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
//   transports: ["websocket", "polling"],
// });

// frontend/lib/socket.ts
import { io } from "socket.io-client";

console.log("SOCKET URL:", process.env.NEXT_PUBLIC_SOCKET_URL);

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
  transports: ["websocket", "polling"],
});

socket.on("connect", () => {
  console.log("Socket Connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Socket Disconnected");
});