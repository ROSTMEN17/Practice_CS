 const mongoose = require('mongoose')

const URL = 'mongodb+srv://Timeweb:cloud@cluster7.ntfh53l.mongodb.net/mongodb://localhost:27017/school';

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        mongoose
        .connect(URL)
        .then((client) => {
            console.log('Connected to MongoDB');
            dbConnection = client.db();
            return cb();
        })
        .catch((err) => {
            return cb(err);
        })
    },
    getDb: () => dbConnection,
} 