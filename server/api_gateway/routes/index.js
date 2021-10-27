const router = require('express').Router();
const UserRouter = require('./UserRouter');
const ProductRouter = require('./ProductRouter');

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.use('/users', UserRouter);
router.use('/products', ProductRouter);

module.exports = router