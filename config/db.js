const mongoose = require('mongoose');

const connect = async()=>{
    await mongoose.connect("mongodb+srv://priyalgabani2004:priyal@cluster0.bcsyjcy.mongodb.net/project?retryWrites=true&w=majority");
    console.log("Connect");
}

module.exports = connect;

