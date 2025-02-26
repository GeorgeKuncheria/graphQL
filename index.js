import {ApolloServer} from "apollo-server";


const server = new ApolloServer({
    typeDefs,  //typeDefs are the schema that defines the structure of the data
    resolvers  //resolvers are the functions that run when a query is made
});


server.listen().then(({url})=> {
    console.log(`Server ready at ${url}`);
});

