const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

let users = [];

// socket.io
io.on("connection", (socket) => {
  socket.on("watch", (video) => {
    socket.join(video);
    users.push({
      id: socket.id,
      video: video,
    });
    let views = users.filter((user) => user.video === video).length;

    io.to(video).emit("views", views);

    socket.on("disconnect", () => {
      const index = users.findIndex((user) => user.id === socket.id);

      if (index !== -1) {
        users.splice(index, 1)[0];
      }
      views = users.filter((user) => user.video === video).length;
      io.to(video).emit("views", views);
    });
  });
});

nextApp.prepare().then(() => {
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
