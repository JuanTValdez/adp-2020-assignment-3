/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("country_of_origin",{
    id: 'id',
    country_name: { type: 'text', notNull: true },
    area_cardinal_direction: { type: 'text', notNull: true},
    terrain: { type: 'text', notNull: true},

    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },


  });

  pgm.createTable("food_list", {
    id: "id",
    food_name: { type: "text", notNull: true },
    price: { type: "float", notNull: true },
    vegetarian_vegan: { type: "text", notNull: true },
    spice_level: { type: "int", notNull: true },
    gluten_free: { type: "text", notNull: true },
    soy_free: { type: "text", notNull: true },
    country_origin_id: { type: "int", notNull: true, references: 'country_of_origin' },

    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.sql(`
  
  INSERT INTO country_of_origin ( country_name, area_cardinal_direction, terrain)
  VALUES
  ('Thailand', 'South' , 'Plains');

  INSERT INTO food_list ( food_name, price, vegetarian_vegan, spice_level, gluten_free, soy_free, country_origin_id)
  VALUES
  ('Pad Thai', 19.99, 'vegetarian', 2, 'no', 'no', 1)
  `)

};

exports.down = pgm => {};
