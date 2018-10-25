const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
// const {ObjectID} = require('mongodb');

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

    connection.query(sqlInsertProduct, function(err, result, fields) {
        if(err) {
            return res.status(400).send();
        };
        console.log("Number of products inserted: " + result.affectedRows);
        res.status(200).send(result);
    })
});

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', function(err, results, fields) {
        if(err) {
            return res.status(400).send();
        }
       res.status(200).send(results);
    })
});

/*  Endpoint: /products/:id */
app.get('/products/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
       return res.status(400).send();
    }

    var queryProductbyID = 'Select * FROM products p WHERE p.ProductID =  ';
    queryProductbyID += id;

    connection.query(queryProductbyID, function(error, results, fields) {
        if(error) {
            return res.status(400).send();
        }
        res.status(200).send(results);
    })
});

app.patch('/products/:id', (req, res) => {
    var id = req.params.id;
    var safeProductColumns = ['Artist', 'Album', 'Cover_Art', 'Release_Year', 'Record_Label', 'Price', 'Spotify_URI'];     //Whitelist of columns that also allows you to loop through an array
    var body = _.pick(req.body, safeProductColumns);

    if(isNaN(id)) {
        return res.status(400).send();
    }

    var setQuery = [];
    var params = [];
    for(var i = 0; i < safeProductColumns.length; i++) {
        var colname = safeProductColumns[i];
        if(body[colname]) {
            setQuery.push(colname +" = ?");             //Sets values you're updating
            params.push(body[colname]);                 //Sets value updates
        }
    }
    
    if (setQuery.length > 0) {
        var sqlPatchProductbyID = "UPDATE products SET " + setQuery.join(', ') + " WHERE ProductID = ?";
        params.push(id);

        connection.query(sqlPatchProductbyID, params, function(error, results, fields) {
            if(error) {
                return res.status(400).send();
            }
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
        return res.status(400).send();
    }

    let sqlDeleteProductByID = "DELETE FROM products WHERE ProductID = ";
    sqlDeleteProductByID += id;

    connection.query(sqlDeleteProductByID, function(error, results, fields) {
        if(error) {
            return res.status(400).send();
        }
        res.status(200).send();
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
        if(err) {
            return res.status(400).send();
        }
        res.status(200).send();
    })
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', function(error, results, fields) {
        if(error) {
            return res.status(400).send();
        }
       res.status(200).send(results);
    })
});

/*  Endpoint: /users:id */
app.get('/users/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
        return res.status(400).send();
     }
 
     var queryUserbyID = 'Select * FROM users u WHERE u.UserID =  ';
     queryUserbyID += id;
 
     connection.query(queryUserbyID, function(error, results, fields) {
         if(error) {
             return res.status(400).send();
         }
         res.status(200).send(results);
     });
});

app.patch('/users/:id', (req, res) => {
    var id = req.params.id;
    var safeUserColumns = ["Name", "Address", "ZipCode", "Country", "Email", "IsAdmin", "Password"];
    var body = _.pick(req.body, safeUserColumns);

    if(isNaN(id)) {
        return res.status(400).send();
    }

    var setUserQuery = [];
    var paramsUser = [];
    for(var i = 0; i < safeUserColumns.length; i++) {
        var colname = safeUserColumns[i];
        if(body[colname]) {
            setUserQuery.push(colname +" =?");
            paramsUser.push(body[colname]);
        }
    }

    if (setUserQuery.length > 0) {
        var sqlPatchUserbyID = "UPDATE users SET " + setUserQuery.join(', ') + " WHERE UserID = ?";
        paramsUser.push(id);

        connection.query(sqlPatchUserbyID, paramsUser, function(error, results, fields) {
            if(error) {
                return res.status(400).send();
            }
            res.status(200).send(results);
        })
    }
});

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;

    if(isNaN(id)) {
        return res.status(400).send();
    }

    let sqlDeleteUserByID = "DELETE FROM users WHERE UserID = ";
    sqlDeleteUserByID += id;

    connection.query(sqlDeleteUserByID, function(error, results, fields) {
        if(error) {
            return res.status(400).send();
        }
        res.status(200).send();
    });
});



/*  End API Calls   */


app.listen(3000, () => {
    console.log('Started on port 3000');
});