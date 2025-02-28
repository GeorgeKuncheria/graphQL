import { useState } from 'react'
import {useQuery,useLazyQuery,useMutation} from '@apollo/client'
import {User, Movie} from './models/types'
import {QUERY_ALL_USERS, QUERY_ALL_MOVIES, GET_MOVIE_BY_NAME, CREATE_USER} from './queries/userQueries'



const App  = () => {


  const [user, setUser] = useState<User>({
    name: '',
    username: '',
    age: 0,
    nationality: '',
  });


  const [movieSearch, setMovieSearch] = useState<string>('')
  const {data,loading,error,refetch}= useQuery(QUERY_ALL_USERS); //useQuery is used to fetch data on component mount
  const {data : movieData} = useQuery(QUERY_ALL_MOVIES);
  const [createUser] = useMutation(CREATE_USER);

  const [
    fetchMovie,
    {data : movieDataByName,error: movieError}
  ] = useLazyQuery(GET_MOVIE_BY_NAME); //useLazyQuery is used to fetch data on demand like find by ID or name in this case 


  const handleCreateUser = async () => {

  
    try {
      await createUser({
        variables: {
          input: user,
        },
      });
  
      // Refetch the users after successful creation
      refetch();
      console.log('User Created');
    
      setUser({
          name: '',
          username: '',
          age: 0,
          nationality: '',
    });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  


  if (loading){
    return <p>Data Is Loading...</p>
  }






  return (
    <div>
      <div>
          <h1>Creating Users</h1>
          <input type="text" placeholder='Name...' value={user.name}  onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
          <input type="text" placeholder='Username...'value={user.username}  onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
          <input type="number" placeholder='Age...' value={user.age} onChange={(e) => { setUser({ ...user, age: Number(e.target.value) }) }} />
          <input type="text" placeholder='Nationality...' value={user.nationality} onChange={(e) => { setUser({ ...user, nationality: e.target.value.toUpperCase() }) }} />
          <button onClick={handleCreateUser}>Create User</button>
      </div>
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
                    {user.favouriteMovies?.map((movie:Movie) => (
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
