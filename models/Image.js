const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    name: String, 
	desc: String, 
	img: 
	{ 
		data: Buffer, 
		contentType: String 
	} 
});

module.exports = Image = mongoose.model('images',ImageSchema);