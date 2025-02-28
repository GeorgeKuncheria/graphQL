interface Movie {
  id: string;
  name: string;
}

interface User  {
  id: string;
  name: string;
  username: string
  age: number
  nationality: string
  favouriteMovies: Movie[]
}


export type { Movie, User };