// Middleware to verify the entered GeoJSON body
const verifyBody = (req, res, next) => {
    const body = req.body;
    try {
        // When empty body is passed 
        if (Object.keys(body).length == 0) {
            return res.status(400).json({ message: "Request body is required" });
        }
        // Checking the format of GeoJSON 
        if ('type' in body && 'properties' in body && 'geometry' in body && 'type' in body.geometry && 'coordinates' in body.geometry) {
            if (body.geometry.coordinates.length > 0)
                next();
            else {
                return res.status(500).json({ message: "No Coordinates passed" });
            }
        }
        else {
            return res.status(400).json({ message: "Request body is malformed" });
        }
    } catch (error) {
        return res.status(401).json({ message: err.message });
    }
}

module.exports = { verifyBody };