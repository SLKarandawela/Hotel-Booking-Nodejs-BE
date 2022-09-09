const express = require('express');
const { getAllHotels, createHotel, getHotelById } = require('../../controllers/hotel/hotel.controller');
const Hotel = require('../../DAO/models/hotel/hotel.model');
const router = express.Router();

// create hotel
router.post('/', createHotel)
// get all hotels
router.get('/', getAllHotels)
// get hotel by id
router.get('/:id', getHotelById)

module.exports = router;