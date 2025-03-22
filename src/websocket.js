import { Server } from "socket.io";

export const initWebSocket = (server) => {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("newJob", (job) => {
      io.emit("jobAdded", job);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
