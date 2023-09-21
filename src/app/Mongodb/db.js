const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Next-Doc-Hub:N2W31E9lboqaS9Mo@cluster0.nbenc92.mongodb.net/";
const client = new MongoClient(uri);
const databaseName = 'ProgNexus';

async function connect() {
    await client.connect();
    return client.db(databaseName);
}

module.exports = { connect };
