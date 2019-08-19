// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/eCommerce', (err, client) => {
    if(err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('eCommerceSite')

    // db.collection('Forms').insertOne({
    //     name: 'Customer Name 2',
    //     email: 'test2@test.com'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo ', err)
    //     }

    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});