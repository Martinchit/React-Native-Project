exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_exe_type',(table)=>{
        table.increments();
        table.integer('user_idkey').unsigned();
        table.foreign('user_idkey').references('id').inTable('user_profile');
        table.integer('exe_type_idkey').unsigned();
        table.foreign('exe_type_idkey').references('id').inTable('exe_type');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_exe_type');
  };