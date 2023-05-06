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
        const db = client.db("marine_database")
        const marineCollection = db.collection("marine_info")
        const marineRouter = createRouter(marineCollection)
        app.use("/api/marine_info", marineRouter)
        const scoreCollection = db.collection('quizz_score')
        const scoreRouter = createRouter(scoreCollection)
        app.use("/api/quizz_score", scoreRouter)
        // app.use("/seed", seedRouter)
        app.use('/seed', (req, res) => {
            console.log('hsfsdgdfgg')
            exec("npm run seeds", (error, stdout, stderr) => { // exec runs smth from the package.json
              if (error || stderr) {
                res.status(500);
                return res.json({ status: 500, error: error || stderr });
              }
              return res.json({ status: 200, message: stdout });
            });
          })
    })
    .catch(console.error)

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`)
})