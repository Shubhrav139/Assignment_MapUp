const service = require('../services/intersectionService');

// Intersection controller to handle result and error.
function intersection(req, res) {
    service
        .intersection(req.body)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(500).send({ error: error.message });
        })
}

module.exports = { intersection };