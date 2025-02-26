import {gql} from 'apollo-server';


const typeDefs = gql`

    type User{        
        id : ID!    
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends : [User]
        favouriteMovies : [Movie]
    }

    type Movie {
        id : ID!
        name : String!
        yearOfPublication : Int!
        isInTheatres : Boolean!
    }

    type Query{
        users: [User!]!
        user(id : ID!): User!
        movies : [Movie!]!
        movie(name : String!): Movie!
    }


    enum Nationality{
        AMERICAN
        CANADIAN
        MEXICAN
        CHINESE
        PAKISTANI
    }
    
    `;


export {typeDefs};