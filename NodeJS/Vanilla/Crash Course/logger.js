const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  // Method declaration
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

// module.exports = Logger;

// const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener: ", data));

logger.log("hello world");
