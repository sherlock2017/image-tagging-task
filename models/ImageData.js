const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageDataSchema = new Schema({
    id:{
        type:String,
        required: true
    },
    isConsent: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: String
    },
    date:{
        type: Date,
        default : Date.now
    }
});

module.exports = ImageData = mongoose.model('userdata',ImageDataSchema);