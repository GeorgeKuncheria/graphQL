import { userList } from "../DummyData.js";


const resolvers = {
    Query : {
        users() {
            return userList;
        }
    }
}

export {resolvers};