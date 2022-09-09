const mongoose = require('mongoose');
const Hotel = require('./hotel.model');
const Schema = mongoose.Schema;


const RoomTypeSchema = new Schema(
    {
        relatedHotel: {
            type: Schema.Types.ObjectId,
            ref: "Hotel"
        },
        roomTypeName: {
            type: String,
            required:true
        },
        roomLength: {
            type: Number,
            required:true
        },
        roomWidth: {
            type: Number,
            required:true
        },
        facilities: [
            {
                facilityName:String
            }
        ]


    }
);



const RoomScehema = new Schema(
    {
        
        roomNumber: {
            type: String,
            required: true,
            unique:true
        },
        roomType: {
            type: Schema.Types.ObjectId,
            ref:'RoomTypeSchema'
        },
        isAvailable: {
            type: Boolean,
            default: true
        }

    }
);

const RoomType = mongoose.model('RoomType', RoomTypeSchema);
const Room = mongoose.model('Room', RoomScehema);
module.exports = {RoomType, Room}