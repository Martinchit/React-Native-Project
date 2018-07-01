
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fb_workout').del()
    .then(function () {
      // Inserts seed entries
      return knex('fb_workout').insert([
        {name: 'push up', weight: '12.5', rep:'12',set:'11',user_id: 1},
      ]);
    });
};
