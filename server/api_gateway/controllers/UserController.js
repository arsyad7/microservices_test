const axios = require('axios');

class UserController {
    static async login(req, res, next) {
        try {
            const { key } = req.headers;

            if(!key) {
                throw {
                    code: 403,
                    message: 'Access Denied'
                }
            }

            const result = await axios.post('http://localhost:4001/login', req.body, {
                headers: { key }
            })
            res.status(200).json(result.data);
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

module.exports = UserController;