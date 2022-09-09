const express = require('express');
const {registerUser, userLogin} = require('../../controllers/auth/auth.controleer');
const router = express.Router();

// signup
router.post("/signUp", registerUser)
//sign in
router.post("/signin", userLogin)
module.exports = router