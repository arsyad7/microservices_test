const axios = require('axios');
const Redis = require("ioredis");
const redis = new Redis();

class ProductController {
    static async list(req, res, next) {
        try {
            const { key } = req.headers;

            if(!key) {
                throw {
                    code: 403,
                    message: 'Access Denied'
                }
            }

            const productsCache = await redis.get("products")

            if (productsCache) {
                res.status(200).json(JSON.parse(productsCache))
            } else {
                const products = await axios.get('http://localhost:4002/products', {
                    headers: { key }
                })
                
                await redis.set('products', JSON.stringify(products.data))
                res.status(200).json(products.data)
            }
        } catch (err) {
            if (err.code) {
                res.status(err.code).json({
                    code: err.code,
                    message: err.message
                })
            } else {
                res.status(err.response.data.code).json(err.response.data)
            }
        }
    }

    static async createProduct(req, res, next) {
        try {
            const { key } = req.headers;

            if(!key) {
                throw {
                    code: 403,
                    message: 'Access Denied'
                }
            }

            const { data } = await axios.post('http://localhost:4002/products', req.body, {
                headers: { key }
            })
            await redis.del("products");
            res.status(201).json(data);
        } catch (err) {
            if (err.code) {
                res.status(err.code).json({
                    code: err.code,
                    message: err.message
                })
            } else {
                res.status(err.response.data.code).json(err.response.data)
            }
        }
    }

    static async editProduct(req, res, next) {
        try {
            const { key } = req.headers;

            if(!key) {
                throw {
                    code: 403,
                    message: 'Access Denied'
                }
            }

            const { data } = await axios.put(`http://localhost:4002/products/${req.params.id}`, req.body, {
                headers: { key }
            })
            await redis.del("products");
            res.status(200).json(data);
        } catch (err) {
            if (err.code) {
                res.status(err.code).json({
                    code: err.code,
                    message: err.message
                })
            } else {
                res.status(err.response.data.code).json(err.response.data)
            }
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { key } = req.headers;

            if(!key) {
                throw {
                    code: 403,
                    message: 'Access Denied'
                }
            }

            const { data } = await axios.delete(`http://localhost:4002/products/${req.params.id}`, { headers: { key } })
            await redis.del("products");
            res.status(200).json(data);
        } catch (err) {
            if (err.code) {
                res.status(err.code).json({
                    code: err.code,
                    message: err.message
                })
            } else {
                res.status(err.response.data.code).json(err.response.data)
            }
        }
    }

    static async detail(req, res) {
        try {
            const { key } = req.headers;
            const { id } = req.params;

            if(!key) {
                throw {
                    code: 403,
                    message: 'Access Denied'
                }
            }

            const productsCache = await redis.get("products")

            const product = JSON.parse(productsCache).filter(e => e.id === +id )
            res.status(200).json(product)
            // if (productsCache) {
            //     res.status(200).json(JSON.parse(productsCache))
            // } else {
            //     const products = await axios.get('http://localhost:4002/products', {
            //         headers: { key }
            //     })
                
            //     await redis.set('products', JSON.stringify(products.data))
            //     res.status(200).json(products.data)
            // }
        } catch (err) {
            if (err.code) {
                res.status(err.code).json({
                    code: err.code,
                    message: err.message
                })
            } else {
                res.status(err.response.data.code).json(err.response.data)
            }
        }
    }
}

module.exports = ProductController;