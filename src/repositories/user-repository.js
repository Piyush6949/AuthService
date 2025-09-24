const { User } = require('../models/index');

class userRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in the user-repository");
            throw { error };
        }
    }

    async destroy(id) {
        try {
            const user = await User.findByPk(id);
            await user.destroy();
            return user;
        }
        catch (error) {
            console.log("Something went wrong in the user-repository");
            throw { error };
        }
    }
}

module.exports = {
    userRepository
}