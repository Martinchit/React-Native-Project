
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fb_workout',(table)=>{
        table.increments();
        table.text('name').notNullable();
        table.decimal('weight').notNullable();
        table.integer('rep').notNullable();
        table.integer('set').notNullable();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('fb_user_table');
        table.timestamps(false,true); 
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fb_workout');

};
