
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fb_user_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('fb_user_table').insert([
        { userId: '10216963395417207'},
      ]);
    });
};
