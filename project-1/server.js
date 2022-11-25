const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Welcome to the homepage")
});
app.get("/admin", (req, res) => {
    res.send("This is the top secret admin page");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Listing on ${PORT}`);
});