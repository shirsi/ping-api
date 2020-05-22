const http = require("http");
const app = require("./app.js");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // name pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (errror.syscall !== "listen") {
    throw errror;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "require elevated priviages");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " require elevated privilages");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? " pipe " + addr : "port " + port;
  debug("Listening on + " + bind);
};
