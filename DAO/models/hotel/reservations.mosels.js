const mongoose = require('mongoose');
const { Room } = require('./room.models');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
    {
        roomId: {
            type: Schema.Types.ObjectId,
            ref:'Room'
        },
        startDate: {
            type: Date
            
        },
        endDate: {
            type: Date
            
        }
    },
    { timestamps: true }
    
);

const Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = {Reservation}