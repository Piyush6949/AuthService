const { User } = require('../models/index');

class userRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in the user-repository");
        }
    }

    async destroy(id) {
        try {
            const user = await User.findbyPk(id);
            await User.destroy(user);
            return user;
        }
        catch (error) {
            console.log("Something went wrong in the user-repository");
        }
    }
}

module.exports = {
    userRepository
}