
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fb_user_table',(table)=>{
        table.increments();
        table.text('userId').notNullable();
        table.timestamps(false,true); 
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fb_user_table');
};

