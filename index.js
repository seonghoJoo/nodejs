const express = require('express');
const app = express();
const morgan = require('morgan');

const users = [
    {id:1, name:'alice'},
    {id:2, name:'bek'},
    {id:3, name:'chris'}
]

app.use(morgan('dev'));

app.get('/users/', (req,res) =>
{
    req.query.limit = req.query.limit || 10;
    // req 객체 사용해보자
    const limit = parseInt(req.query.limit, 10);  //"2"

    if(Number.isNaN(limit)){
        // 기본이 200이기 때문에
        return res.status(400).end();
    }
    res.json(users.slice(0,limit));
});

app.get('/users/:id', function(req, res){
    const id = parseInt(req.params.id,10);
    // id가 숫자가 아닐경우
    if(Number.isNaN(id)) return res.status(400).end();

    const user = users.filter( (user) => 
        user.id === id
    )[0];

    if(!user){
        return res.status(404).end();
    }
    res.json(user);
});

app.listen(3000,function(){
    console.log('server is running');
})

module.exports = app;