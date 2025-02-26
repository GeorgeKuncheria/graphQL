import { userList,movieList } from "../DummyData.js";
import _ from "lodash";


const resolvers = {
    Query : {

        //User Reolvers
        users : () => {
            return userList;
        },
        user : (parent, args) => {
            const id = args.id;
            const user = _.find(userList, {id: Number(id)});
            return user;

        },

        //Movie Resolvers
        movies : () => {
            return movieList;
        },

        movie: (parent,args) => {
            const name = args.name;
            const movie = _.find(movieList,{name:name});
            return movie;
        }
    },

    User: {
        favouriteMovies: () => {
                return _.filter(movieList, (movie) =>  movie.yearOfPublication > 2012 && movie.yearOfPublication < 2020);
         
            
        }
    }
}

export {resolvers};