const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + "/../../build"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "/../../", "build", "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
http.listen(PORT, () => {
  console.log("listening on *:3001");
});
