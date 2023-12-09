const express = require("express");
const { readFileSync } = require("fs");

const port = 8000;
const app = express();
app.use(express.json());

let comments = [{user: "Someone", comment: "ユーザー名とコメントを入力して送信"}]

app.get("/", (req, resp) => {
    resp.status(200).send(readFileSync("./index.html", { encoding: "utf-8"}));
});
app.post("/addComment", (req, resp) => {
    comments[comments.length] = req.body;
    resp.status(200).send();
});
app.get("/loadComments", (req, resp) => {
    resp.status(200).send(JSON.stringify(comments));
});



app.listen(port);
console.log(`server running on port ${port}`);
