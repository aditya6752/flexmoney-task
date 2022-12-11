const Slot = require('../models/Slot');

const router = require('express').Router();

router.get('/All', async(req, res) => {
    try {
        const slot = await Slot.find({});
        
        return 	res.status(200).json(slot)
    } catch (error) {
        return 	res.status(500).json(error)    
    }
});

router.post('/create', async(req, res) => {
    // console.log("hit")
    try {
        // console.log(req.body)
        const slot = new Slot(req.body);
        await slot.save();
        return 	res.json(slot);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router