const { MongoClient } = require("mongodb");
const express = require("express");
let db;
const app = express();
app.get("/", (req, res) => {
    res.send("Welcome to the homepage")
});
app.get("/admin", (req, res) => {
    res.send("This is the top secret admin page");
});
const PORT = 3000;
async function start() {
    const client = new MongoClient("mongodb://root:root@localhost:27017/AmazingMernApp?&authSource=admin");
    await client.connect();
    db = client.db();
    app.listen(PORT, () => {
        console.log(`Server Listing on ${PORT}`);
    });
}
start();
