const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersdataSchema = new Schema({
    isConsent: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    date:{
        type: Date,
        default : Date.now
    }
});

module.exports = Usersdata = mongoose.model('usersdata',UsersdataSchema);