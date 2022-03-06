const express = require('express');
const app = express();
const morgan = require('morgan');

const users = [
    {id:1, name:'alice'},
    {id:2, name:'bek'},
    {id:3, name:'chris'},
]

app.use(morgan('dev'));

app.get('/users', function(req,res){

    req.query.limit = req.query.limit || 10;
    // req 객체 사용해보자
    const limit = parseInt(req.query.limit, 10);  //"2"

    if(Number.isNaN(limit)){
        // 기본이 200이기 때문에
        return res.status(400);
    }
    res.json(users.slice(0,limit));
});

app.listen(3000,function(){
    console.log('server is running');
})

module.exports = app;