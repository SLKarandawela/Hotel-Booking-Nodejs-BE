// dependancy variables
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path:'../../HotelBookingApp/.env'});
const db = require('./DAO/dbConnection');
const cookieParser = require('cookie-parser');

// router imports
const authRouter = require('./routes/auth/auth.routes');
const userRouter = require('./routes/user/user.routes');
const hotelRouter = require('./routes/hotel/hotel.routes');
const roomRouter = require('./routes/room/room.routes');
const ReservationRouter  = require('./routes/room/reservation.routes');
// app configurtions
const app = express();
app.listen(5000, ()=>{
    console.log("App is listening on port number 5000");
})  

// database connection
db.connect(
    process.env.url
)

// cookie parser middleware
app.use(cookieParser());
//mideleware express json
app.use(express.json()); 
// middleware routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/hotel', hotelRouter)
app.use('/api/room', roomRouter);
app.use('/api/reservation', ReservationRouter)

//error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Error found";
    return res.status(errorStatus).json(
        {
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack:err.stack
        }
    );
})
