
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jwt-simple';
import axios from 'axios';
import authClass from './auth';
import config from './config';
import groups from './groups';
import users from './users';
import * as cors from 'cors';


const app = express();
const auth = authClass();

app.use(bodyParser.json());
app.use(auth.initialize());
app.use(cors());

app.get('/api/groups',auth.authenticate(),(req,res)=>{
    res.json(groups);
});

app.get('/api/users',auth.authenticate(),(req,res)=>{
    res.json(users);
});

app.post("/api/login", function(req, res) {  
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find((u)=> {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);

    }
});

app.post("/api/login/facebook", function(req, res) {  
    if (req.body.access_token) {
        var accessToken = req.body.access_token;
        
        axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
        .then((data)=>{
            if(!data.data.error){
                var payload = {
                    id: accessToken
                };
                users.push({
                    id: accessToken,
                    name: "Facebook User",
                    email: "placeholder@gmail.com",
                    password: "123456"
                })
                var token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    token: token
                });
            }else{
                res.sendStatus(401);
            }
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(401);
        });
    } else {
        res.sendStatus(401);
    }
});

app.listen(8080, ()=>{
console.log('port is listening at 8080')
});

