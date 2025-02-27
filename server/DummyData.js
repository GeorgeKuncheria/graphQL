const userList = [
        {
            id: 1,
            name: "John Doe",
            username: "john_doe",
            age: 25,
            nationality: "AMERICAN",
            friends : [
                {
                    id: 2,
                    name: "Jane Smith",
                    username: "jane_smith",
                    age: 30,
                    nationality: "CANADIAN"
                },
                {
                    id: 4,
                    name: "Liu Wei",
                    username: "liu_wei",
                    age: 22,
                    nationality: "CHINESE"
                }
            ]
        },


        {
            id: 2,
            name: "Jane Smith",
            username: "jane_smith",
            age: 30,
            nationality: "CANADIAN",
            friends: [
                {            
                    id: 1,
                    name: "John Doe",
                    username: "john_doe",
                    age: 25,
                    nationality: "AMERICAN"
                },
                {
                    id: 3,
                    name: "Carlos Rodriguez",
                    username: "carlos_rod",
                    age: 28,
                    nationality: "MEXICAN"
                }

            ]
        },


        {
            id: 3,
            name: "Carlos Rodriguez",
            username: "carlos_rod",
            age: 28,
            nationality: "MEXICAN"
        },


        {
            id: 4,
            name: "Liu Wei",
            username: "liu_wei",
            age: 22,
            nationality: "CHINESE"
        },


        {
            id: 5,
            name: "Aisha Khan",
            username: "aisha_khan",
            age: 27,
            nationality: "PAKISTANI"
        }
    ]




    
const movieList = [
        {
            id: 1,
            name: "Inception",
            yearOfPublication: 2010,
            isInTheatres: false
        },
        {
            id: 2,
            name: "The Matrix",
            yearOfPublication: 1999,
            isInTheatres: false
        },
        {
            id: 3,
            name: "Interstellar",
            yearOfPublication: 2014,
            isInTheatres: true
        },
        {
            id: 4,
            name: "Avengers: Endgame",
            yearOfPublication: 2019,
            isInTheatres: false
        },
        {
            id: 5,
            name: "Mickey 17",
            yearOfPublication: 2025,
            isInTheatres: true
        }
    ];


export {userList, movieList};

