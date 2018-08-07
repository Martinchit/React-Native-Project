exports.up = function(knex, Promise) {
    return knex.schema.createTable('activity_exe_type',(table)=>{
        table.increments();
        table.integer('activity_idkey').unsigned();
        table.foreign('activity_idkey').references('id').inTable('activity');
        table.integer('exe_type_idkey').unsigned();
        table.foreign('exe_type_idkey').references('id').inTable('exe_type');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activity_exe_type');
  };