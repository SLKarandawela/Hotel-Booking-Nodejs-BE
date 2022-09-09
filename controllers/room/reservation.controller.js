const { Reservation } = require("../../DAO/models/hotel/reservations.mosels");
const createError = require("../../utils/createError");
const objectId = require('mongodb').ObjectId

const makeReservation = async (req, res, next) => {
    try {
        const roomId = req.body.id;
        console.log(roomId)
        const startdate = req.body.start;
        const endDate = req.body.end;

        const existingReservation = Reservation.find({ roomId: objectId(roomId) });
        // console.log(existingReservation)

        if (existingReservation) {
            res.status(200);
        }
        else {
            next(createError(401, "Already exists"));
        }
  
    }
    catch (err) {
        next(err);

        
    }
}

module.exports = {makeReservation}