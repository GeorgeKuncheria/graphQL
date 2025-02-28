import { useState } from 'react'
import {gql, useQuery,useLazyQuery} from '@apollo/client'
import {User, Movie} from './models/types'


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




const App  = () => {
  const [movieSearch, setMovieSearch] = useState<string>('')
  const {data,loading,error}= useQuery(QUERY_ALL_USERS); //useQuery is used to fetch data on component mount
  const {data : movieData} = useQuery(QUERY_ALL_MOVIES);

  const [
    fetchMovie,
    {data : movieDataByName,error: movieError}
  ] = useLazyQuery(GET_MOVIE_BY_NAME); //useLazyQuery is used to fetch data on demand like find by ID or name in this case 

  if (loading){
    return <p>Data Is Loading...</p>
  }

  if (data){
    console.log(data)
  }

  if (error){
    console.log(error)
  }



  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data && data.users.map((user:User) => (
            <div>
                <li><h2>{user.name}</h2></li>
                <li><h3>{user.username}</h3></li>
                <li><h4>{user.age}</h4></li>
                <li><h4>{user.nationality}</h4></li>
                <li><h4>Favourite Movies</h4></li>
                <ul>
                    {user.favouriteMovies.map((movie:Movie) => (
                        <li>{movie.name}</li>
                    ))}
                </ul>
                <hr/>
            </div>
        ))}
      </ul>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <h1>List of Movies</h1>
      <ul>
        {movieData && movieData.movies.map((movie:any) => (
            <div>
                <li><h2>{movie.name}</h2></li>
                <li><h4>{movie.yearOfPublication}</h4></li>
                <hr/>
            </div>
        ))}
      </ul>

      <div>
        <input type= "text" placeholder="Interstellar..." onChange={(e) => setMovieSearch(e.target.value)}/>
        <button onClick={()=>{fetchMovie({
          variables:{
            name: movieSearch
          }  //fetchMovie is a function that takes variables as an argument and fetches data based on the query
        })}}>
          Fetch Data
          </button>
        <div>
            {movieDataByName &&
              <div>
                {" "}
                <h1>Movie Name :{movieDataByName.movie.name}</h1>
                <h2>Year of Publication: {movieDataByName.movie.yearOfPublication}</h2> {""}
              </div>
            }
            {movieError && <h1>Movie Not Found</h1>}
        </div>
      </div>

    </div>
  )
}

export default App
