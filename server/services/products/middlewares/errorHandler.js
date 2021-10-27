function errorHandler(err, req, res, next) {
    let code = 500;
    let message = ['Internal server error']

    switch (err.name) {
        case "SequelizeValidationError":
            code = 400;
            message = err.errors[0].message
            res.status(code).json({code, message})
            break;
        case "authentication":
            code = 401;
            message = [err.message];
            res.status(code).json({code, message})
            break;
        case "notFound":
            code = 404;
            message= [err.message];
            res.status(code).json({code, message})
            break;
        case "forbidden":
            code = 403;
            message= [err.message];
            res.status(code).json({code, message})
            break;
        default:
            res.status(code).json({code, message})
            break;
    }
}

module.exports = errorHandler;