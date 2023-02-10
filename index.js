import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Product.js";

const resolvers = {
  Query,
  Category,
  Product,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 5000;

server
  .listen(PORT)
  .then(({ url }) => console.log(`Server is ready on: ${url}`));
