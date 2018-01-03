var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var jwt = require('./services/jwtGen');
var fileData = './data/users.json';

var server = express();

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});

//gestion de rutas
server.post('/api.clubPadel/login', function(req, res){

    var userLogin = req.body;    
    var users = JSON.parse(fs.readFileSync(fileData, 'utf8'));

    if(!userLogin.name || !userLogin.password){
        res.status(400).send({message: "Bad request. Missing user or password!"});
        return;
    }
    
    var encontrado = false;
    var i = 0;    
    while(!encontrado && i < users.length){        
        if (userLogin.name === users[i].name && 
            userLogin.password === users[i].password){                
                encontrado = true;
        }
        i++;
    }
    
    if (encontrado){
        res.set('Authorization', 'Bearer '+jwt.createToken(userLogin));
        res.status(200).send();

    }else{
        res.status(401).send({message: "Wrong user or password"});
    }    
});

server.post('/api.clubPadel/register', function(req, res) {

    var newUser = req.body;
    var users = JSON.parse(fs.readFileSync(fileData, 'utf8'));

    users.push(newUser);

    fs.writeFile(fileData, JSON.stringify(users) , 'utf-8');

    res.status(200).send({message: "OK"});
});

server.listen(8080, function(){
    console.log('Server listening on port 8080');
});