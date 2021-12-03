const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });