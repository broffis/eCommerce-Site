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
    var product = new Product ({
        bandName: req.body.bandName,
        albumTitle: req.body.albumTitle,
        cover: req.body.cover,
        releaseYear: req.body.releaseYear,
        recordLabel: req.body.recordLabel,
        price: req.body.price
    });

    product.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.get('/products', (req, res) => {
    // Product.find().then((products) => {
    //     res.send({products})
    // }, (e) => {
    //     res.status(400).send(e);
    // });
    connection.query('SELECT * FROM products', function(error, results, fields) {
        if(error) throw error;
        // console.log(JSON.stringify(results, undefined, 2));
       res.send(results);
    })
});

/*  Endpoint: /products/:id */
app.get('/products/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Product.findById(id).then((product) => {
        if(!product) {
            return res.status(404).send();
        }

        res.send({product});
    }).catch((e) => {
        res.status(400).send();
    });
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

    if(!ObjectID) {
        return res.status(404).send();
    }

    Product.findByIdAndRemove(id).then((product) => {
        if(!product) {
            return res.status(404).send();
        }

        res.send({product});
    }).catch((e) => {
        res.status(400).send();
    })
});

/*  Endpoint: /users */
app.post('/users', (req, res) => {
    // var form = new Form ({
    //     name: req.body.name,
    //     street: req.body.street,
    //     zipCode: req.body.zipCode,
    //     country: req.body.country,
    //     email: req.body.email
    // });

    let Name = req.body.custName;
    let Address = req.body.streetAddress;
    let ZipCode = req.body.zipCode;
    let Country = req.body.country;
    let Email = req.body.custEmail;

    // const values = [
    //     "Name",
    //     "Address",
    //     "ZipCode",
    //     "Country",
    //     "Email"
    // ];

    // form.save().then((doc) => {
    //     res.send(doc);
    // }, (e) => {
    //     res.send(e);
    // });

    // console.log(Name, Address, ZipCode, Country, Email);

    var sqlInsert = "INSERT INTO users (Name, Address, ZipCode, Country, Email, Password) VALUES ";
    
    sqlInsert += `("${Name}", "${Address}", ${ZipCode}, "${Country}", "${Email}", "Password")`;
    
    // console.log(sqlInsert);

    connection.query(sqlInsert, function(err, result) {
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
});

app.get('/users', (req, res) => {
    Form.find().then((users) => {
        res.send({users});
    }).catch((e) => {
        res.status(400).send(e);    
    })
});

/*  Endpoint: /users:id */
app.get('/users/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Form.findById(id).then((user) => {
        if(!user) {
            return res.status(404).send();
        }

        res.send({user});
    }).catch((e) => {
        res.status(400).send();    
    })
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

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Form.findByIdAndRemove(id).then((user) => {
        if(!user) {
            return res.status(404).send();
        }

        res.send({user});
    }).catch((e) => {
        res.status(400).send();
    })
});



/*  End API Calls   */


app.listen(3000, () => {
    console.log('Started on port 3000');
});