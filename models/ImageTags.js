const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageTagsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required : true
    },
    date:{
        type: Date,
        default : Date.now
    }
});

module.exports = ImageTags = mongoose.model('imgtag',ImageTagsSchema);