const EventEmitter = require("events");
const eventsEmitter = new EventEmitter();

eventsEmitter.on("start", () => {
  console.log("Rodando...");
});

console.log("Aguarde");

eventsEmitter.emit("start");

console.log("Fim.");
