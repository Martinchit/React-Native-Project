const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');

module.exports = (app, knex) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local-signup', new LocalStrategy(
        {
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                let users = await knex('user_profile').where({ email: email });
                if (users.length > 0) {
                    return done(null, false, { message: 'Email already taken' });
                }
                let hash = await bcrypt.hashPassword(password)
                const newUser = {
                    email: email,
                    password: hash,
                    weight: req.body.weight,
                    height: req.body.height,
                    gender: req.body.gender,
                    age: req.body.age
                };
                let abc = await knex('user_profile').insert(newUser).returning('id');

                done(null, abc[0]);
            } catch (err) {
                done(err);
            }

        })
    );

    passport.use('local-login', new LocalStrategy(
        async (email, password, done) => {
            try {
                let users = await knex('user_profile').where({ email: email })
                if (users.length == 0) {
                    return done(null, false, { message: 'Incorrect credentials' });
                }
                let user = users[0];
                let result = await bcrypt.checkPassword(password, user.password);
                if (result) {
                    return done(null, user.id);
                } else {
                    return done(null, false, { message: 'Incorrect credentials' });
                }
            } catch (err) {
                done(err);
            }
        }
    ));

    passport.serializeUser((abc, done) => {
        done(null, abc);
    });

    passport.deserializeUser(async (user, done) => {
        let users = await knex('user_profile').where({ id: user });
        if (users.length == 0) {
            return done(new Error('Wrong user id'));
        }
        let selectedUser = users[0];
        return done(null, selectedUser);
    });
};


