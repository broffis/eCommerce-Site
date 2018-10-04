// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/eCommerce', (err, client) => {
    if(err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('eCommerceSite')

    // db.collection('Forms').deleteMany({name: 'Customer Name 4'}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Forms').findOneAndUpdate({
        _id: new ObjectID('5bb541e4510142d44f39ce4a')
    }, {
        $set: {
            email: 'testletest@test.com'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});