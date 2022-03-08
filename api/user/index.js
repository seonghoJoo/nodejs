// 라우팅 설정 로직

let users = [
    {id:1, name:'alice'},
    {id:2, name:'bek'},
    {id:3, name:'chris'}
]

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

app.delete('/users/:id', function(req, res){

    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();

    users = users.filter(user=>user.id !== id);
    res.status(204).end();
});

app.post('/users', (req,res) => {
    const name = req.body.name;
    // name 누락
    if(!name) return res.status(400).end();
    
    // name 중복
    const isConflict = users.filter(user => user.name === name).length > 0;
    if(isConflict) return res.status(409).end();

    const id = Date.now();
    const user = {id , name};
    users.push(user);
    return res.status(201).json(user);
});

app.put('/users/:id', function(req,res){

    const id = parseInt(req.params.id,10);
    const name = req.body.name;

    if(Number.isNaN(id)) return res.status(400).end();
    if(!name) return res.status(400).end();

    const user = users.filter(user => user.id === id)[0];
    if(!user) return res.status(404).end();
    if(user.name === name) return res.status(409).end();

    user.name = name;
    res.json(user);
});