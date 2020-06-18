const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const { addUser, getViews, removeUser } = require("./pages/api/data/users");

// socket.io
io.on("connection", (socket) => {
  socket.on("watch", (video) => {
    socket.join(video);

    addUser(socket.id, video);

    io.to(video).emit("views", getViews(video));

    socket.on("disconnect", () => {
      removeUser(socket.id);
      io.to(video).emit("views", getViews(video));
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
