const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the Dashboard");  
});

app.get("/test", (req, res) => {
    res.send("Hello from the test API; Tested twice");  
});

app.get("/hello", (req, res) => {
    res.send("Hello Hello Hello; Tested again!!!");  
});

app.listen(7777, () => {
    console.log("Server is successfully running");
});