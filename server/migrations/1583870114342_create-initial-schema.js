/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("country_of_origin",{
    id: 'id',
    name: { type: 'text', notNull: true },
    area_cardinal_direction: { type: 'text', notNull: true},
    terran: { type: 'text', notNull: true}


  });

  pgm.createTable("food_list", {
    id: "id",
    name: { type: "text", notNull: true },
    price: { type: "float", notNull: true },
    vegetarian_vegan: { type: "text", notNull: true },
    spice_level: { type: "int", notNull: true },
    gluten_free: { type: "text", notNull: true },
    soy_free: { type: "text", notNull: true },
    country_origin_id: { type: "int", notNull: true, references: "" }
  });

};

exports.down = pgm => {};
