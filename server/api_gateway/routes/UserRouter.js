const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/login', UserController.login);

module.exports = router