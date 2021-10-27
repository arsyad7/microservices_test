const router = require('express').Router();
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');

router.use(authentication);

router.get('/', (req, res) => {
  res.send('Hello World!')
});

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.put('/users/:id', UserController.editUser);
router.delete('/users/:id', UserController.deleteUser);

router.use(errorHandler);

module.exports = router;