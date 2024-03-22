const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/chat");
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const messageSchema = require("./Models/messages");

io.on("connection", (socket) => {
  socket.on("chat message", async (msg) => {
    console.log(msg);
    if (msg) {
      await messageSchema.create({
        message: msg,
      });
    }
    const msgs = await messageSchema.find();

    io.emit("hello", msgs);
  });
});

server.listen(8080, () => {
  console.log("server running at http://localhost:8080");
});
