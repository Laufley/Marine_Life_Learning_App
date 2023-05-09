const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const MongoClient = require("mongodb").MongoClient
const { exec } = require("child_process");

const createRouter = require("./helpers/create_router.js")
// const seedRouter = require("./helpers/seed.js")

MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    try {
      const db = client.db("marine_database");
      const marineCollection = db.collection("marine_info");
      const marineRouter = createRouter(marineCollection);
      app.use("/api/marine_info", marineRouter);
      const scoreCollection = db.collection("quizz_score");
      const scoreRouter = createRouter(scoreCollection);
      app.use("/api/quizz_score", scoreRouter);
      // other code
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: error });
    }
  })
  .catch(console.error);


app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`)
})