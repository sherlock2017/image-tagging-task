const express = require('express');
const router = express.Router();

//ImageTags Model
const ImageTags = require('../../models/ImageTags');

// @route  GET api/imagetags
// @desc   Get all ImageTags
// @access public

router.get('/', (req, res) => {
    ImageTags.find()
        .then(imagetags => res.json(imagetags))
});

// @route  POST api/imagetags
// @desc   Post all items
// @access public

router.post('/', (req, res) => {
    const newImageTags = new ImageTags({
        id: req.body.id,
        name: req.body.name
    });

    newImageTags.save().then(imagetags => res.json(imagetags));
});

// @route  DELETE api/imagetags/id
// @desc   Delete an imagetag by id
// @access public

router.delete('/:id', (req, res) => {
    ImageTags.findById(req.params.id)
    .then(imagetags => imagetags.remove().then(() => res.json({ success:true })))
    .catch(err => res.status(404).json({success : false}))
});

module.exports = router;