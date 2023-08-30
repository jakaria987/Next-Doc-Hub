const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Next-Doc-Hub:UDLlIFoBGfeHDCK7@cluster0.nbenc92.mongodb.net/";
const client = new MongoClient(uri);
const databaseName = 'Next-Doc-Hub';

async function connect() {
    await client.connect();
    return client.db(databaseName);
}

module.exports = { connect };
