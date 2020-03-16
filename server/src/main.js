const { ApolloServer, gql } = require('apollo-server');
import { Pool } from 'pg'


const pool = new Pool();

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    "List of Food Dishes."
    foodList: [FoodList!]
    "List of Countries"
    countryOrigin: [CountryOfOrigin!]
  }

  type CountryOfOrigin{

    id: ID!
    country_name: String!
    area_cardinal_direction: String!
    terrain: String!
  }

  type FoodList{

    id: ID!
    food_name: String!
    price: Float!
    vegetarian_vegan: String!
    spice_level: Int!
    gluten_free: String!
    soy_free: String!
    # originCountry will be the name used in playground
    originCountry: CountryOfOrigin!

  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  FoodList:{
    originCountry: async (source) => {
        const results = await pool.query(`
        SELECT * FROM country_of_origin WHERE id = $1

        `,[source.country_origin_id])
        return results.rows[0]
      },
      
  },
  Query: {
    hello: () => 'world',
    foodList: async () => {

      const results = await pool.query(`
      
      SELECT * from food_list
      `)
      return results.rows
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});