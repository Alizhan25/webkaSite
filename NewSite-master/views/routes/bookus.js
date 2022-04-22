const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render("pages/bookus"))
module.exports = router;