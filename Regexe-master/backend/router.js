const passport = require('passport');
const axios = require('axios');
const moment = require('moment');

module.exports = (express, knex) => {
    const router = express.Router();

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }

    router.get('/signed', (req, res) => {
        res.send('signed in !');
    });

    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/error'
    }));

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    router.get('/hiit', (req, res) => {
        res.sendFile(__dirname + '/hiit.html');
    });

    router.get('/testing', (req, res) => {
        res.sendFile(__dirname + '/testing.html');
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/dashboard',
        failureRedirect: '/error',
    }));
    router.get('/error', (req, res) => {
        res.send('failed');
    });

    //log out
    // router.get('/logout', function (req, res) {
    //     console.log('HI');
    //     req.logout();
    //     res.redirect('/');
    // });

    //check food  VVV
    router.post('/api/get-calories', (req, res) => {
        axios({
            url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            method: 'post',
            headers: {
                'x-app-key': '0cc29202aed5d97a53a5d8a530346f87',
                'x-app-id': 'a0662efe',
                'Content-Type': 'application/json'
            },
            data: {
                "query": req.body.query
            },
            responseType: 'json'
        }).then((body) => {
            res.json(body.data.foods[0].nf_calories);

        }).catch((err) => {
            console.log(err)
        })
    });
    //save food VVV
    router.post('/api/save-result', (req, res) => {
        knex('get').insert({
            record: parseFloat(req.body.calories), user_idkey: req.user.id
        }).then((data)=>{ //.then() is for insert the result 
            console.log("good save");
        }).catch((err)=>{
            console.log(err);
        }) 
    });

    router.get('/dashboard', isLoggedIn, (req, res) => {
        res.sendFile(__dirname + '/dashboard.html');
    })

    router.get('/getExe', (req, res) => {
        knex.select('id', 'name', 'MET').from('activity')
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
            })
    })

    router.get('/cal', (req, res) => {
        let user = req.user
        knex.select('weight').from('user_profile').where({
                id: user.id
            })
            .then((data) => {
                res.json(data[0].weight);
            }).catch((err) => {
                console.log(err)
            })
    })

    router.post('/api/save-burnresult', (req, res) => {
        console.log(req.body)
        knex('burn').insert({
            record: parseFloat(req.body.calories),
            user_idkey: req.user.id
        }).then((data) => {
            res.json({
                msg: 'saved calories!'
            });
        }).catch((err) => {
            console.log(err);
            res.status(409).json({
                msg: "cannot save"
            }) //correct syntax
        })
    });

    router.get('/show', (req, res) => {
        res.sendFile(__dirname + '/chart.html');
    });

    router.get('/burn-chart', (req, res) => {
        knex.from('burn').sum('record').innerJoin('user_profile', 'burn.user_idkey',  'user_profile.id').where('burn.user_idkey', req.user.id).whereNot({record:'NaN'}).groupBy('date').orderBy('date', 'aesc')
            .then((data) => {
                res.json(data)
            }).catch((err) => {
                console.log(err)
            })
    })

    router.get('/get-chart', (req, res) => {
        knex.from('get').sum('record').innerJoin('user_profile', 'get.user_idkey',  'user_profile.id').where('get.user_idkey', req.user.id).whereNot({record:'NaN'}).groupBy('date').orderBy('date', 'aesc')
            .then((data) => {
                res.json(data)
            }).catch((err) => {
                console.log(err)
            })
    })

    router.get('/users-info', (req, res) => {
        knex('user_profile').where('id', req.user.id)
            .then((data) => {
                res.json(data[0]);
            }).catch((err) => {
                console.log(err)
            })
    })
    return router;
};