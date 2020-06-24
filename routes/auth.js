const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const User = require("../models/user");

const router = new express.Router();

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/



/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
router.post("/register", async function(req, res, next) {
    try {
        const {username} = await User.register(req.body);
        let token = jwt.sign({username}, SECRET_KEY);
        return res.json({ token });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;