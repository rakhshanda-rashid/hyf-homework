const express = require("express");
const router = express.Router();

const reservations = require("../data/reservatio.json");

router.get("/reservations", function(req, res) {
  res.json(reservations);
});

module.exports = router;