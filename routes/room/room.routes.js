const express = require('express');
const { createRoomType, createRoom } = require('../../controllers/room/room.controller');
const router = express.Router();

router.post('/roomtype', createRoomType);
router.post('/', createRoom)

module.exports = router