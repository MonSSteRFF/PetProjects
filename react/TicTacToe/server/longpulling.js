const express = require("express");
const cors = require("cors");
const events = require("events");

const globalConfig = {
  PORT: 5000,
};

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());

app.get("new-messages", (req, res) => {
  emitter.once("newMessage", (message) => {
    res.json(message);
  });
});

app.post("new-messages", (req, res) => {
  const message = req.body;
  emitter.emit("newMessage", message);
  res.status(200);
});

app.listen(globalConfig.PORT, () =>
  console.log(`server start on http://localhost:${globalConfig.PORT}`)
);
