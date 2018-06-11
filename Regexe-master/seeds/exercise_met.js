
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity').insert([
        {id: 1, name: 'basketball',MET:'6.5'},
        {id: 2, name: 'golf',MET:'4.8'},
        {id: 3, name: 'rugby',MET:'8.3'},
        {id: 4, name: 'hockey',MET:'7.8'},
        {id: 5, name: 'soccer',MET:'10'},
        {id: 6, name: 'hockey',MET:'7.8'},
        {id: 7, name: 'tennis',MET:'7.3'},
        {id: 8, name: 'volleyball',MET:'4.5'},
        {id: 9, name: 'squash',MET:'12'},
        {id: 10, name: 'boxing',MET:'7.8'},
        {id: 11, name: 'cycling',MET:'7'},
        {id: 12, name: 'running',MET:'9'},



      ]);
    });
};
