import {ApolloServer} from "apollo-server";
import {typeDefs} from "./schema/type-defs.js";
import {resolvers} from "./schema/resolvers.js";

const server = new ApolloServer({
    typeDefs,  //typeDefs are the schema that defines the structure of the data
    resolvers  //resolvers are the functions that run when a query is made
});


server.listen().then(({url})=> {
    console.log(`Server ready at ${url}`);
});

