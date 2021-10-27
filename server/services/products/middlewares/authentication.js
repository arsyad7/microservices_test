async function authentication(req, res, next) {
    try {
        const key = req.headers.key;

        if(!key) {
            throw {
                name: 'forbidden',
                message: 'Access Denied'
            }
        }

        next();
    } catch (err) {
        next(err);
    }
}

module.exports = authentication;