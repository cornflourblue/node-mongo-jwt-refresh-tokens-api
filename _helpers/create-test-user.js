const bcrypt = require('bcryptjs');
const db = require('./db');
const Role = require('./role');

module.exports = createTestUser;

async function createTestUser() {
    // create test user if the db is empty
    if ((await db.User.countDocuments({})) === 0) {
        const user = new db.User({
            firstName: 'Test',
            lastName: 'User',
            username: 'test',
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.Admin
        });
        await user.save();
    }
}