const { Product } = require('../models');

class ProductController {
    static async listProduct(req, res, next) {
        try {
            const products = await Product.findAll()

            res.status(200).json(products)
        } catch (err) {
            next(err)
        }
    }

    static async createProduct(req, res, next) {
        try {
            const { name, description, imgUrl, stock, type, UserId } = req.body;

            const result = await Product.create({ name, description, imgUrl, stock, type, UserId });
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async editProduct(req, res, next) {
        try {
            const { id } = req.params;
            const { name, description, imgUrl, stock, type, UserId } = req.body;

            const result = await Product.update({ name, description, imgUrl, stock, type, UserId }, {
                where: { id },
                returning: true
            });

            res.status(200).json(result[1][0])
        } catch (err) {
            next(err)
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;

            await Product.destroy({ where : { id }})
            res.status(200).json({
                message: 'Delete product success'
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ProductController