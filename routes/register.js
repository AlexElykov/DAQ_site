const express = require('express');
const router = express.Router();


// Home page = index page
router.get('/', (req, res) => {
    res.render('register', { title: 'register' });
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});






module.exports = router;
