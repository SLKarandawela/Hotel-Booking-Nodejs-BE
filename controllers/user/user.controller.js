const User = require("../../DAO/models/hotel/user.models");

// update user
const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userToUpdate = await User.findByIdAndUpdate(
            userId,
            { $set: req.body },
            {new:true}
        );
        res.status(200).json(userToUpdate);
    }
    catch (err) {
        next(err);
    }
}

// get all users
const allUsers = async (req, res, next) => {
    try {
        const userList = await User.find();
        res.status(200).json(userList);
    }
    catch (err) {
        next(err);
    }
}

// get user by id
const userById = async (req, res, next) => {
    try {
        const searchedUserById = await User.findById(req.params.id);
        res.status(200).json(searchedUserById);
    }
    catch (err) {
        next(err);
    }
}

// delete user
const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
        
    }
    catch (err) {
        next(err);
    }
}

module.exports = {updateUser, allUsers, userById, deleteUser}