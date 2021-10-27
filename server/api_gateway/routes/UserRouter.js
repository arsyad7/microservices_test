const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.put('/:id', UserController.editUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router