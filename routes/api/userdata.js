const express = require('express');
const router = express.Router();


//ImageData Model
const ImageData = require('../../models/ImageData');


// @route  POST api/userdata
// @desc   Post all userdata
// @access public

router.post('/', (req, res) => {
    const newImageData = new ImageData({
        isConsent: req.body.isConsent,
        gender: req.body.gender,
        age: req.body.agegroup
    });

    newImageData.save().then(userdata => res.json(userdata));
});


module.exports = router;