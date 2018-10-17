const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

// var {mongoose} = require('./db/mongoose');
// var {Form} = require('./models/form');
// var {Product} = require('./models/product');


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
    let Artist = req.body.Artist;
    let Album = req.body.Album;
    let Cover_Art = req.body.Cover_Art;
    let Release_Year = req.body.Release_Year;
    let Record_Label = req.body.Record_Label;
    let Price = req.body.Price;
    let Spotify_URI = req.body.Spotify_URI;

    let sqlInsertProduct = "INSERT INTO products (Artist, Album, Cover_Art, Release_Year, Record_Label, Price, Spotify_URI) VALUES ";
    sqlInsertProduct += `("${Artist}", "${Album}", "${Cover_Art}", ${Release_Year}, "${Record_Label}", ${Price}, "${Spotify_URI}")`;

    connection.query(sqlInsertProduct, function(err, result) {
        if(err) throw err;
        console.log("Number of products inserted: " + result.affectedRows);
        res.send(result);
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
    var safeColumns = ['Artist', 'Album', 'Cover_Art', 'Release_Year', 'Record_Label', 'Price', 'Spotify_URI'];     //Whitelist of columns that also allows you to loop through an array
    var body = _.pick(req.body, safeColumns);

    // console.log(req.body);

    // console.log(id, body);

    if(isNaN(id)) {
        return console.log('Unable to process request: IDs must be numbers');
    }

    // var sqlPatchProductbyID = "Update products SET ? where ProductID = ? ";
    var setQuery = [];
    var params = [];
    for(var i = 0; i < safeColumns.length; i++) {
        var colname = safeColumns[i];
        if(body[colname]) {
            setQuery.push(colname +" = ?");             //Sets values you're updating
            params.push(body[colname]);                 //Sets value updates
        }
    }
    
    // var patchParams = (`"${JSON.stringify(body)}"`, id);
    // var patchParams = [`"${body}"`, id];
    if (setQuery.length > 0) {
        var sqlPatchProductbyID = "UPDATE products SET " + setQuery.join(', ') + " WHERE ProductID = ?";
        params.push(id);

        connection.query(sqlPatchProductbyID, params, function(error, results, fields) {
            if(error) throw error;
            console.log(`Updated Product with ID of ${id}`);
            res.status(200).send(results);
        })
    }
    // var sqlPatchv2 = "Update products SET ";
    // sqlPatchv2 += patchParams[0];
    // sqlPatchv2 += " WHERE ProductID = ";
    // sqlPatchv2 += patchParams[1];


    
    //use lodash (_) to pull values out of request, will give field name and value. Set = to body
    //use params = [body, id]
    //SQL query "Update (table name) SET ? WHERE xID = ? "
            //connection.query(query, [params], function())
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

    let Name = req.body.Name;
    let Address = req.body.Address;
    let ZipCode = req.body.ZipCode;
    let Country = req.body.Country;
    let Email = req.body.Email;

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

    // if(!ObjectID.isValid(id)) {
    //     return res.send(404).send();
    // }

    // Form.findByIdAndUpdate(id, {$set: body}, {new: true}).then((user) => {
    //     if(!user) {
    //         return res.status(404).send();
    //     }

    //     res.send({user});
    // }).catch((e) => {
    //     res.status(400).send();
    // })
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