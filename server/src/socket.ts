import { Server as IOServer } from "socket.io";
import { env } from "./env";
import http from "http";

let io: IOServer | null = null;

export function initSocket(server: http.Server) {
  io = new IOServer(server, {
    cors: { origin: env.SOCKET_ORIGIN, methods: ["GET", "POST"], credentials: true },
  });

  io.on("connection", (socket) => {
    socket.on("join", ({ conversationId }) => {
      socket.join(conversationId);
    });
    socket.on("leave", ({ conversationId }) => {
      socket.leave(conversationId);
    });
  });

  return io;
}

export function getIO() {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
}
