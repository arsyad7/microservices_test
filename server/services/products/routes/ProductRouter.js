const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');

router.use(authentication);

router.get('/products', ProductController.listProduct);
router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.editProduct);
router.delete('/products/:id', ProductController.deleteProduct);
  
router.use(errorHandler)

module.exports = router