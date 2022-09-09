const express = require('express');
const { updateUser, allUsers, userById, deleteUser } = require('../../controllers/user/user.controller');
const { verifyToken } = require('../../utils/verifyToken');
const router = express.Router();

// token verification
router.get('/checkAuthentication', verifyToken, (req, res, next) => {
    res.send("You are authorizd!")
})

// user verification
router.get('/checkUser', (req, res, next) => {
    res.send("You are authorizd and have access to do anything!")
} )

// update user
router.put('/:id', updateUser);

// get all users
router.get('/', allUsers);

// get specific user by id
router.get('/:id', userById);

// delete given user
router.delete('/:id', deleteUser);
module.exports = router;

