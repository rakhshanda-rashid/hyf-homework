const express = require("express");
const router = express.Router();

const reservations = require("../data/reservatio.json");

router.get("/reservation", function(req, res) {
  res.json(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = router;