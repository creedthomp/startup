const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('run');
const shoeCollection = db.collection('shoe');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

// async function addShoeData(shoeData) {
//     const result = await shoeCollection.insertOne(shoeData);
//     return result;
//   }
async function updateShoeData(username, shoe, miles) {
    // Logic to check if the shoe already exists for the user
    // If it does, update the miles; if not, add a new document
    const existingShoe = await shoeCollection.findOne({ username, shoe });
    if (existingShoe) {
        await shoeCollection.updateOne({ username, shoe }, { $inc: { miles: miles } });
    } else {
        await shoeCollection.insertOne({ username, shoe, miles });
    }
}
async function addShoeData(shoeData) {
    const collection = db.collection('shoes');
    await collection.insertOne(shoeData);
  }


  function getShoeData() {
    const query = {}; // define your query criteria
    const options = {}; // define options like sorting, limiting
    const cursor = shoeCollection.find(query, options);
    return cursor.toArray();
  }

  
  module.exports = { addShoeData, getShoeData };
