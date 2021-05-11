const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here
    // get 10 recent operations
    const queryText = `SELECT * FROM "operations" ORDER BY id DESC LIMIT 10;`
    pool.query(queryText)
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  router.post('/', (req, res) => {
    // POST route code here
    // creates new z-pet
    console.log('POST');
    const question = req.body.inputs;
    const queryText = `INSERT INTO "operations" ("question") VALUES ($1);`;
    pool.query(queryText, [question])
      .then(() => { res.sendStatus(201)})
      .catch((error) => {
          console.log('Error', error);
          res.sendStatus(500);
      });
  });

  module.exports = router;