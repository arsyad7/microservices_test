const { User, Access } = require('../models');
const { decode } = require('../helpers/bcryptjs');
const { sign } = require('../helpers/jwt');

class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: { email },
                include: [ Access ]
            });

            if(!user) {
                throw {
                    name: "authentication",
                    message: "Wrong email/password"
                }
            };
            
            const checkPassword = decode(password, user.password);
            if(!checkPassword) {
                throw {
                    name: "authentication",
                    message: "Wrong email/password"
                }
            };

            const access_token = sign({ id: user.id, email, password })
            res.status(200).json({ id: user.id, email, access_type: user.Access.access_type, access_token })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController