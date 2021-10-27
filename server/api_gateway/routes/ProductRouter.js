const ProductController = require('../controllers/ProductController');
const router = require('express').Router();

router.get('/', ProductController.list);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.editProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router