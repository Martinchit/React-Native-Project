exports.up = function(knex, Promise) {
    return knex.schema.createTable('activity',(table)=>{
        table.increments();
        table.text('name');
        table.text('description')
        table.decimal('MET')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activity');
  };