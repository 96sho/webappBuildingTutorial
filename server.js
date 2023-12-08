const express = require("express");
const { readFileSync } = require("fs");

const port = 8000;

const app = express();

app.get("/", (req, resp) => {
    resp.status(200).send(readFileSync("./index.html", { encoding: "utf-8"}));
});


app.listen(port);
console.log(`server running on port ${port}`);
