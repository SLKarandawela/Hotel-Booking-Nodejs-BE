const User = require("../../DAO/models/hotel/user.models")
const bcrypt = require('bcrypt');
const createError = require("../../utils/createError");
const jwt = require('jsonwebtoken');
// user registration
const registerUser = async (req, res, next) => {
    
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPwd = bcrypt.hashSync(req.body.password, salt);
        
        
        const newUser = new User(
            {
                userName: req.body.userName,
                password: hashedPwd,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email:req.body.email
                
            }
        );

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    }
    catch (err) {
        next(err);
    }
}

// user login
const userLogin = async (req, res, next) => {
    try {
        const user = await User.findOne(
            {
                userName: req.body.userName
            }
        );
       
        if (!user) return next(createError(404, 'User Not found'));

        const matchPwd = await bcrypt.compare(req.body.password, user.password);

        if (!matchPwd) return next(createError(400, 'Password or username incorrect'));

        // creating jwt token
        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.jwt_secret
        );

        // adding created jwt to cookies with cookie parser


        const {password, isAdmin, ...otherDetails} = user._doc
        res
            .cookie("access_token", token,{httpOnly:true})
            .status(200)
            .json({ ...otherDetails });
    }
    catch (err) {
        next(err);
    }
}
module.exports = {registerUser, userLogin};