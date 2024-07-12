const MongoClient = require('mongodb').MongoClient;

const state = {
    db: null
};

module.exports.connect = async function (done) {
    const url = 'mongodb://localhost:27017/';
    const dbName = 'shopping';

    try {
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        state.db = client.db(dbName);
        done();
    } catch (err) {
        done(err);
    }
};

module.exports.get = function () {
    return state.db;
};


