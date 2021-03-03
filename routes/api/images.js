const express = require('express');
const router = express.Router();


//ImageTags Model
const Images = require('../../models/Image');

// @route  GET api/images
// @desc   Get all Images
// @access public
 
router.get('/', (req, res) => { 
	Images.find().then(imgs => res.json(imgs))
        
}); 


module.exports = router;