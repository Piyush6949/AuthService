const {userRepository} = require('../repositories/user-repository');

const User = new userRepository();

async function createUser(data){
    try {
        const user = await User.create(data);
        return user;   
    } catch (error) {
        console.log("something went wrong in user-service");
        throw { error };
    }
}

async function deleteUser(id) {
    try {
        const user = await User.destroy(id);
        return user;
    } catch (error) {
        console.log("something went wrong in user-service");
        throw { error };
    }
}

module.exports = {
    createUser,
    deleteUser
}