const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get all items
// @access public

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

// @route  POST api/items
// @desc   Post all items
// @access public

router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});



// @route  DELETE api/items/id
// @desc   Delete an items by id
// @access public

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success:true })))
    .catch(err => res.status(404).json({success : false}))
});

module.exports = router;