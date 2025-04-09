import express from "express";
import path from "./utils/path.js";
import serverSocket from "./config/socket.config.js";
import configHandlebars from "./config/handlebars.config.js";
import chatRouter from "./routes/chat.router.js";

const PORT = 8080;
const HOST = "127.0.0.1"; //localhost
const server = express();

server.use("/chat", chatRouter);

//Configuracion de motor de plantillas
configHandlebars.config(server);

//Declaracion de ruta estatica
server.use("/api/public", express.static(path.public));

//Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

//Control de errores internos
server.use((error, req, res) => {
    console.log("Error:", error.message);
    res.status(500).send("<h1>Error 500</h1><h3>Se ha generado un error en el servidor</h3>");
});


//Metodo oyente de solicitudes
const serverHTTP = server.listen(PORT, () => {
    console.log("Ejecuntadose: http://" + HOST + ":" + PORT);
});

//Configurando el servidor de websocket
serverSocket.config(serverHTTP);