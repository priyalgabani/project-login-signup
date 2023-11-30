const express=require('express');
const connect = require('./config/db');
const app = express();
app.use(express.json());
require('dotenv').config();

app.set('view engine', 'ejs');
app.set("views",__dirname + '/views');
app.use(express.urlencoded({ extended: true }));



app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
    connect();
})

