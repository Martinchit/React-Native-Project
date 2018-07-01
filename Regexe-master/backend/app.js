var express = require('express');
var path = require('path');
var cookieSession = require('cookie-session')
var passport = require('./passport-init');
var app = express();
var flash = require('connect-flash');

const bodyPaser = require('body-parser');
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);
const router = require('./router')(express, knex);

require('dotenv').config();

app.use(cookieSession({
    name: 'session',
    secret: 'a hard to guess secret',
    // Cookie Options
    //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(bodyPaser.urlencoded({ extended: false }));//need
app.use(express.static(path.join(__dirname, 'public')));//need：a website with many static files that you want to serve, like CSS files, HTML files or image files******開一個folder裝起先js ＆ css
app.use(flash());

passport(app, knex);
app.use('/', router);
app.listen(8080, (console.log('port is on 8080')));

module.exports = app;



import app from './src/App'