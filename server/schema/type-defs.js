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


    input CreateUserInput{
        name: String!
        username: String!
        age : Int! 
        nationality : Nationality = CHINESE    
    }

    input UpdateUsernameInput{
        id: ID!
        newUsername: String!
    }

    type Mutation{
        createUser(input : CreateUserInput!) : User
        updateUsername(input : UpdateUsernameInput!) : User
        deleteUser(id : ID!) : User
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