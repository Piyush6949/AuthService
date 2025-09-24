const userRepository = require('../repositories/user-repository');

const User = new userRepository();

async function createUser(data){
    try {
        const user = User.create(data);
        return user;   
    } catch (error) {
        console.log("something went wrong in user-service");
    }
}

async function deleteUser(id) {
    try {
        const user = User.destroy(id);
        return user;
    } catch (error) {
        console.log("something went wrong in user-service");
    }
}

module.exports = {
    createUser,
    deleteUser
}