var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var jwt = require('./services/jwtGen');
var fileData = './data/users.json';

var server = express();

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

//gestion de rutas
server.post('/api.clubPadel/login', function(req, res){

    var userLogin = req.body;
    console.log(userLogin);
    var users = JSON.parse(fs.readFileSync(fileData, 'utf8'));
    
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
        res.status(200).send({message: "OK", token: jwt.createToken(userLogin)});
    }else{
        res.status(404).send({message: "NOK"});
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
    console.log('Server listening on port 3000');
});