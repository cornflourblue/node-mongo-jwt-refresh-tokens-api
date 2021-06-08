const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions,()=>console.log('connect'));
mongoose.Promise = global.Promise;

module.exports = {
    User: require('users/user.model'),
    RefreshToken: require('users/refresh-token.model'),
    Blog: require('models/blog.model'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}