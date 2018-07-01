
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fb_food').del()
    .then(function () {
      // Inserts seed entries
      return knex('fb_food').insert([
        {name: 'Pasta', quantity:1, carb: '175.56',fats: '43.55', protein: '8.99', calories:'385.45',user_id :1},
      ]);
    });
};
