// Hard-coded access token, pass in headers of the request to grant access.
const accessToken = 'f0ce43ead3d2db62e4f10ff2daf08665bc25ae504e1775';

// Middleware to check auth based token
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    try {
        // Checking if token is entered.
        if (!token) {
            return res.status(403).json({ message: "A token is required for authentication" });
        }
        // If entered token matches, then grant access.
        if (token === accessToken) {
            next();
        } else {
            return res.status(403).json({ message: "Invalid token" });
        }
    } catch (err) {
    }
};

module.exports = { verifyToken };