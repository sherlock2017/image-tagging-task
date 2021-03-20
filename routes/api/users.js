const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


//User Model
const User = require('../../models/User');
const { json } = require('express');


// @route  GET api/users
// @desc   register userdata
// @access public


router.post('/', (req, res) => {
    const {name, email, password}= req.body;

    //simple validation
    if(!name || !email || !password){
        return res.status(400).json({msg: 'Please enter all feilds'})
    }

    //check for existing user
    User.findOne({email})
    .then(user =>{
        if(user) return res.status(400).json({msg: "User already exists "})
    
        const newUser = new User({
            name,
            email,
            password
        });

        //create salt & hash
        bycrypt.genSalt(10, (err, salt) => {
            bycrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then(user => {
                    
                    jwt.sign(
                        { id:user.id },
                        config.get('jwtSecret'),
                        {expiresIn:3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                //returns user and token back to route private path
                                token,
                                user: {
                                    id: user.id,
                                    name:user.name,
                                    email:user.email
                                }
                            }); 
                        }
                    )
                });
            })
        })
    })
   res.send('register user')
});



// @route  POST api/users
// @desc   Post all userdata
// @access public

// router.post('/', (req, res) => {
//     const newUser = new User({
//         id: req.body.id,
//         isConsent: req.body.isConsent,
//         gender: req.body.gender,
//         age: req.body.agegroup
//     });

//     newUser.save().then(user => res.json(user));
// });


module.exports = router;