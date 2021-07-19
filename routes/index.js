const express = require('express');
const router = express.Router();

// Home page = index page
router.get('/', (req, res) => {
  res.render('index', { title: 'Tsinghua test DAQ' });
});

module.exports = router;
