const { RoomType, Room } = require("../../DAO/models/hotel/room.models")

const createRoomType = async (req, res, next) => {
    try {
        const newRoomType = new RoomType(
            {
                relatedHotel: req.body.hotelId,
                roomTypeName: req.body.typeName,
                roomLength: req.body.length,
                roomWidth: req.body.width
            }
        );

        const savedRoomType = await newRoomType.save();
        res.status(200).json(savedRoomType);
        
    }
    catch (err) {
        next(err)
    }
}

// create new room 
const createRoom = async (req, res, next) => {
    try {
        const newRoom = new Room(
            {
                roomNumber: req.body.roomNumber,
                roomType: req.body.roomType
                
            }
        )

        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    }
    catch (err) {
        next(err);
    }
}
module.exports = {createRoomType, createRoom}