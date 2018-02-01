exports.up = function(knex, Promise) {
  return knex.schema.createTable('gym', function (t) {
    t.increments('id').primary()
	t.string('gym_id').notNullable()
	t.timestamp('last_modified')
	t.timestamp('last_scanned')
    t.string('name').notNullable()
    t.string('latitude').notNullable()
	t.string('longitude').notNullable()
	t.boolean('sponsor')
	t.integer('team_id')
	t.integer('slots_available')
    t.timestamps(false, true)
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gym')  
};