exports.up = function(knex, Promise) {
    return knex.schema.createTable('exe_type',(table)=>{
        table.increments();
        table.text('name');

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('exe_type');
  };