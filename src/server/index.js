const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
app.use;
express.static(__dirname + "/../../build");
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
http.listen(PORT, () => {
  console.log("listening on *:3001");
});
