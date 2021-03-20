const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const imagetags = require('./routes/api/imagetags');
const userdata = require('./routes/api/userdata');
const images = require('./routes/api/images');
//const items = require('./routes/api/items');

const app = express();

// bodyParser middleware
app.use(express.json())


// Connecting to the database 
mongoose.connect('mongodb://localhost:27017/img', 
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => { 
		console.log('connected') 
    }); 
  
	
// DB config
// const db = config.get('mongoURI');

//Connect to mongodb
// mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }, err => { 
// 		console.log('connected') 
// 		}).then(()=> console.log('MongoDB connected..'))
//         .catch(err => console.log(err));

//backend requests
app.use('/api/images' ,images);
app.use('/api/userdata',userdata)
app.use('/api/imagetags' ,imagetags);
app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/usersdata',require('./routes/api/usersdata'));


//only for deployement process
//if in production run below scripts
if(process.env.NODE_ENV === 'production'){
	//set static folder
	app.use(express.static('client/build'))
	//any requests other than backend request should go here
	app.get('*',(req,res) => {
		res.sendFile(path.resolve(__dirname,'client','build','index.html'));
	})
}
    
//listen server
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on ${port}`));