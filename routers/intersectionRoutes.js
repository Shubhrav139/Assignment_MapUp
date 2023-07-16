const express = require("express");
const controller = require("../controllers/intersectionController");
const auth = require("../middlewares/auth");
const validator = require("../middlewares/validator");
const logger = require("../middlewares/logger");
const router = express.Router();

// Route for intersections api.
router.route("/intersection").post(logger.logRequest, auth.verifyToken, validator.verifyBody, (req, res) => {
    controller.intersection(req, res);
});

module.exports = router;