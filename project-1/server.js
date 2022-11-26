const { MongoClient } = require("mongodb");
const express = require("express");
let db;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
function passwordProtected(req, res, next) {
  res.set("WWW-Authenticate", "Basic realm='Our Mern App'");
  if (req.headers.authorization == "Basic YWRtaW46YWRtaW4=") {
    next();
  } else {
    console.log(req.headers.authorization);
    res.send(401);
  }
}
app.get("/", async (req, res) => {
  const allAnimals = await db.collection("animals").find().toArray();

  res.render("home", { allAnimals });
});
app.use(passwordProtected);
app.get("/admin", (req, res) => {
  res.render("admin");
});
app.get("/api/animals", async (req, res) => {
  const allAnimals = await db.collection("animals").find().toArray();
  res.json(allAnimals);
});
const PORT = 3000;
async function start() {
  const client = new MongoClient(
    "mongodb://root:root@localhost:27017/AmazingMernApp?&authSource=admin"
  );
  await client.connect();
  db = client.db();
  app.listen(PORT, () => {
    console.log(`Server Listing on ${PORT}`);
  });
}
start();
