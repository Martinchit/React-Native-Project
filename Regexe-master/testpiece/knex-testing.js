const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

 knex('activity').insert([
          {id: 11, name: 'basketballs',MET:'6.5'},
        ]).then();
      
  // .thn() => sql (;)