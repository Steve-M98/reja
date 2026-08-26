console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: KIRISH CODE

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: SESSION CODE

// 3:VIEWS CODE

app.set("'views", "views");
app.set("view engine", "ejs");

// 4: ROUTING CODE
app.get("/hello", function (req, res) { 
    res.send(`<h1 style="background: greenyellow">HELLO WORLD! by STEVE DEV</h1>`);
});

app.get("/gift", function (req, res) { 
    res.send(`<h1 style="background: greenyellow">Siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT,  function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});