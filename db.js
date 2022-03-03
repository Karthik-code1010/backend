const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2:27017/CrudDB', (err)=>{
    if(!err)
        console.log('MongoDB Connection succeeded...');
    else
        console.log('Error in DB Connection :'+JSON.stringify(err,undefined, 2));

});

module.exports = mongoose;
//172.17.0.2