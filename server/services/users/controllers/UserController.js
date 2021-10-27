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

    static async register(req, res, next) {
        try {
            const { username, email, password, AccessId } = req.body;

            const result = await User.create({ username, email, password, AccessId })
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async editUser(req, res, next) {
        try {
            const { id } = req.params;
            const { username, email, password, AccessId } = req.body;

            const result = await User.update({ username, email, password, AccessId }, {
                where: { id },
                returning: true
            })

            res.status(200).json(result[1][0])
        } catch (err) {
            next(err)
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const { id } = req.params;

            await User.destroy({ where: { id }})
            res.status(200).json({
                message: 'Delete user success'
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController