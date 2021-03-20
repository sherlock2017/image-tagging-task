const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();


//ImageData Model
const Usersdata = require('../../models/Users');


// @route  POST api/userdata
// @desc   Post all userdata
// @access public

router.post('/', (req, res) => {
    const {isConsent, gender, age}= req.body;

    //simple validation
    if(!isConsent || !gender || !age){
        return res.status(400).json({msg: 'Please enter all feilds'})
    }
    const newUsersdata = new Usersdata({
        isConsent,
        age,
        gender
    });

    newUsersdata.save().then(userdata => {
        jwt.sign(
            { id:userdata.id },
            config.get('jwtSecret'),
            {expiresIn:3600 },
            (err, token) => {
                if(err) throw err;
                res.json({
                token,
                userdata : {
                    id: userdata.id,
                    isConsent: userdata.isConsent,
                    gender: userdata.gender,
                    age: userdata.age
                }
            });
        }
     )
        
    });
});


module.exports = router;