const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
          required:true  
        },
        lastName: {
            type: String,
          required:true  
        },
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
          required:true  
        },
        email: {
            type: String,
            required: true,
          unique:true
        },
        isAdmin: {
            type: Boolean,
          default:false  
        }

    },

    {timestamps:true}

)

const User = new mongoose.model("User", UserSchema)
module.exports = User