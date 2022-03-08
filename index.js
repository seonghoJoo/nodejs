const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());//for parsing application/json
app.use(bodyParser.urlencoded({extended:true})) // for parsing application



app.listen(3000,function(){
    console.log('server is running');
})

module.exports = app;