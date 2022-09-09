const express = require('express');
const { makeReservation } = require('../../controllers/room/reservation.controller');
const router = express.Router();

// create reservation
router.post('/', makeReservation);

module.exports = router