const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/';

mongoose.connect(url).then(() => {
    console.log('Connected successfully to server');
}).catch( (e)=>{
    console.log('not Connected' , e);
});
