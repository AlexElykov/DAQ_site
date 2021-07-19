const express = require('express');
const router = express.Router();


// Home page = index page
router.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});






module.exports = router;
