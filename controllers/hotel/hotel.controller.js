const Hotel = require("../../DAO/models/hotel/hotel.model");

// create new hotel
const createHotel = async (req, res, next) => {
    
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }
    catch(err){
        next(err)
    }
}

// get hotels
const getAllHotels = async (req, res, next) => {
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    }
    catch (err) {
        next(err);
    }
}

// get specific hotel by id
const getHotelById = async (req, res, next) => {
    const hotelId = req.params.id;
    try {
        const foundHotelOnId = await Hotel.findById(hotelId);
        res.status(200).json(foundHotelOnId);
    }
    catch (err) {
        next(err)
    }
}


module.exports = {getAllHotels, createHotel, getHotelById}