
exports.up = function(knex, Promise) {
  return knex.schema.createTable('raid', function (t) {
    t.increments('id').primary()
	t.string('raid_level').notNullable()
	t.timestamp('raid_start')
	t.timestamp('raid_end')
    t.string('raid_pokemon_cp')
    t.string('raid_pokemon_id')
	t.string('raid_pokemon_move_1')
	t.string('raid_pokemon_move_2')
	t.string('raid_pokemon_name')
	t.integer('gym_id').references('id').inTable('gym')
    t.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('raid')
};
