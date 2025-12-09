import pino from "pino";

const logFile = "logs/api.log";

// Create a transport for the console
const consoleTransport = pino.transport({
  target: "pino/file",
  options: {
    destination: 1, // 1 = stdout
    colorize: true,
  },
});

// Create a transport for the log file
const fileTransport = pino.transport({
  target: "pino/file",
  options: {
    destination: logFile,
    colorize: false,
  },
});

// Create the logger instance
export const logger = pino(
  {
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  pino.multistream([
    { stream: consoleTransport },
    { stream: fileTransport },
  ]),
);
