import { userList,movieList } from "../DummyData.js";
import _ from "lodash";


const resolvers = {

    // Query Resolvers for fetching data
    Query : {

        //User Resolvers
        
        //Context is an object that is shared by all resolvers in a query. It is used to store information that is needed by 
        // multiple resolvers. Used for authentication, authorization, and data fetching.
        // **Make sure context comes after parent, args  in the resolver function. **
        users : (parent,args,context) => {
            // console.log(context);
            return userList;
        },
        user : (parent, args,context,info) => {
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

    // Custom Resolvers for fetching data for example user favourite movies
    User: {
        favouriteMovies: (parent) => {
            //console.log(parent); // parent is the user object that is passed to the resolver function
            return _.filter(movieList, (movie) =>  movie.yearOfPublication > 2012 && movie.yearOfPublication < 2020);
        },
    },


    // Mutation Resolvers for creating, updating, and deleting users

    Mutation :{
            createUser : (parent,args) => {
                const user = args.input;
                const lastId =userList[userList.length - 1].id ;
                user.id= lastId + 1;
                userList.push(user);
                return user;

    },

        updateUsername : (parent,args) => {
            const {id, newUsername} = args.input;
            const user = _.find(userList, {id: Number(id)});
            user.username = newUsername;
            return user;
        },

        deleteUser : (parent,args) => {
            const id = args.id;
            _.remove(userList, {id: Number(id)});
            return null
        }

    
}

};

export {resolvers};