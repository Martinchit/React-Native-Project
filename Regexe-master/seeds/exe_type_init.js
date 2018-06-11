
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exe_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('exe_type').insert([
        {id: 1, name: 'aerobic'},
        {id: 2, name: 'endurance'}
      ]);
    });
};
