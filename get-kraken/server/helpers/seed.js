const express = require('express');
const { exec } = require("child_process");

const seedRouter = function () {
  const router = express.Router();
  router.get('/', (req, res) => {
    console.log('hsfsdgdfgg')
    exec("npm run seeds", (error, stdout, stderr) => { // exec runs smth from the package.json
      if (error || stderr) {
        res.status(500);
        return res.json({ status: 500, error: error || stderr });
      }
      return res.json({ status: 200, message: stdout });
    });
  })
  return router;
};
module.exports = seedRouter;