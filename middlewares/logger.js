// Middleware to log request's method
const logRequest = (req, res, next) => {
    console.info(`${req.method} ${req.originalUrl}`)
    next();
}

module.exports = { logRequest };