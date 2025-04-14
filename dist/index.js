"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("@apollo/server");
const type_graphql_1 = require("type-graphql");
const standalone_1 = require("@apollo/server/standalone");
const dbConfig_1 = require("./config/dbConfig");
const CountryResolver_1 = require("./resolver/CountryResolver");
const port = 4000;
const start = async () => {
    await dbConfig_1.dataSource.initialize();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [CountryResolver_1.CountryResolver],
    });
    const apiServer = new server_1.ApolloServer({ schema });
    const { url } = await (0, standalone_1.startStandaloneServer)(apiServer, {
        listen: { port: port },
    });
    console.log(`🚀 Server ready at: ${url}`);
};
start();
