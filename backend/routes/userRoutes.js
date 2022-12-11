const User = require('../models/User');

const router = require('express').Router();

router.post('/register', async(req, res) => {
    
    try {
        const data = {
            ...req.body,
            amount:200
        };
        
        const user = new User(req.body);
        await user.save();
        return 	res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
//    return res.send("hit api")
});

module.exports = router