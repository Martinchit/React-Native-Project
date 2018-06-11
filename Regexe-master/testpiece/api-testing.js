const axios = require('axios');
const apikey = require('./config/key').nutritionix



axios({
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    method: 'post',
    headers: apikey,
    data: {
        "query":"2 eggs"
       },
    json: true 
 }).then(body => {
    console.log(body.data)
 }) 
 .catch(err => {
    console.log(err);
 });