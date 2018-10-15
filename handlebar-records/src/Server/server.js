const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

// var {mongoose} = require('./db/mongoose');
var {Form} = require('./models/form');
var {Product} = require('./models/product');


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'Handlebar Records'
});

connection.connect((error) => {
    if(error) {
      return  console.log('Connection error');
    }
    
    console.log('Connected to MySQL');
});


var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    // if(req.method == 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods', 'POST', 'PATCH', 'GET', 'DELETE');
        // return res.status(200).json({});
        next();
    // }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/*  Endpoint: /products */
app.post('/products', (req, res) => {
    let Artist = req.body.bandName;
    let Album = req.body.albumTitle;
    let Cover_Art = req.body.cover;
    let Release_Year = req.body.releaseYear;
    let Record_Label = req.body.recordLabel;
    let Price = req.body.price;
    let Spotify_URI = req.body.spotifyURI;

    let sqlInsertProduct = "INSERT INTO products (Artist, Album, Cover_Art, Release_Year, Record_Label, Price, Spotify_URI) VALUES ";
    sqlInsertProduct += `("${Artist}", "${Album}", "${Cover_Art}", ${Release_Year}, "${Record_Label}", ${Price}, "${Spotify_URI}")`;

    connection.query(sqlInsertProduct, function(err, result) {
        if(err) throw err;
        console.log("Number of products inserted: " + result.affectedRows);
    })
});

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', function(error, results, fields) {
        if(error) throw error;
       res.send(results);
    })
});

/*  Endpoint: /products/:id */
app.get('/products/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
       return console.log('Unable to process request: IDs must be numbers');
    }

    var queryProductbyID = 'Select * FROM products p WHERE p.ProductID =  ';
    queryProductbyID += id;

    connection.query(queryProductbyID, function(error, results, fields) {
        if(error) throw error;
        res.send(results);
    })
});

app.patch('/products/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['albumTitle', 'artist', 'releaseYear']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Product.findByIdAndUpdate(id, {$set: body}, {new: true}).then((product) => {            //What is {new: true}?
        if(!product) {
            return res.status(404).send();
        }
        
        res.send({product});
    }).catch((e) => {
        res.status(400).send();    
    })
});

app.delete('/products/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
        return console.log('Must enter a valid ProductID: ID entered is not a number');
    }

    let sqlDeleteProductByID = "DELETE FROM products WHERE ProductID = ";
    sqlDeleteProductByID += id;

    console.log(sqlDeleteProductByID);

    connection.query(sqlDeleteProductByID, function(error, results, fields) {
        if(error) throw error;
        console.log(`Removed Product with ID of ${id} from database`);
        res.send();
    });
});

/*  Endpoint: /users */
app.post('/users', (req, res) => {

    let Name = req.body.custName;
    let Address = req.body.streetAddress;
    let ZipCode = req.body.zipCode;
    let Country = req.body.country;
    let Email = req.body.custEmail;

    var sqlInsert = "INSERT INTO users (Name, Address, ZipCode, Country, Email, Password) VALUES ";
    
    sqlInsert += `("${Name}", "${Address}", ${ZipCode}, "${Country}", "${Email}", "Password")`;

    connection.query(sqlInsert, function(err, result) {
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', function(error, results, fields) {
        if(error) throw error;
       res.send(results);
    })


    // Form.find().then((users) => {
    //     res.send({users});
    // }).catch((e) => {
    //     res.status(400).send(e);    
    // })
});

/*  Endpoint: /users:id */
app.get('/users/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
        return console.log('Unable to process request: IDs must be numbers');
     }
 
     var queryUserbyID = 'Select * FROM users u WHERE u.UserID =  ';
     queryUserbyID += id;
 
     connection.query(queryUserbyID, function(error, results, fields) {
         if(error) throw error;
         res.send(results);
     });
});

app.patch('/users/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["name", "street", "zipCode", "country", "email"]);

    if(!ObjectID.isValid(id)) {
        return res.send(404).send();
    }

    Form.findByIdAndUpdate(id, {$set: body}, {new: true}).then((user) => {
        if(!user) {
            return res.status(404).send();
        }

        res.send({user});
    }).catch((e) => {
        res.status(400).send();
    })
});

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
        return console.log('Must enter a valid UserID: ID entered is not a number');
    }

    let sqlDeleteUserByID = "DELETE FROM users WHERE UserID = ";
    sqlDeleteUserByID += id;

    // console.log(sqlDeleteUserByID);

    connection.query(sqlDeleteUserByID, function(error, results, fields) {
        if(error) throw error;
        console.log(`Removed User with ID of ${id} from database`);
        res.send();
    });
});



/*  End API Calls   */


app.listen(3000, () => {
    console.log('Started on port 3000');
});