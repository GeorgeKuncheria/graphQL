import {gql} from '@apollo/client';


const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users{
        id
        name
        username
        age
        nationality
        favouriteMovies {
            id
            name
          }
    }
}
`


const QUERY_ALL_MOVIES = gql`
  query GetAllMovies{
  movies {
    id
    name
    isInTheatres
    yearOfPublication
  }
}
`

const GET_MOVIE_BY_NAME= gql`
  query GetMovieByName($name: String!){
      movie(name: $name) {
          name
          yearOfPublication
  }
}
`


const CREATE_USER = gql`
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    age
    nationality
  }
}
`


export {QUERY_ALL_USERS, QUERY_ALL_MOVIES, GET_MOVIE_BY_NAME, CREATE_USER}