import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/dbConfig";
import { CountryResolver } from "./resolver/CountryResolver";


const port = 4000;

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const apiServer = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(apiServer, {
    listen: { port: port },
  });
  console.log(`🚀 Server ready at: ${url}`);
};
start();