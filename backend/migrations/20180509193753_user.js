exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_profile',(table)=>{
        table.increments();
        table.text('email').notNullable();
        table.text('password').notNullable();
        table.integer("weight").notNullable();
        table.integer("height").notNullable();
        table.text("gender").notNullable();
        table.integer('age').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_profile');
  };