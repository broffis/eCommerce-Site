// const express = require('express');
// const bodyParser = require('body-parser');
// const _ = require('lodash');
// const {ObjectID} = require('mongodb');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'Handlebar Records'
});

connection.connect((err)=> {
    if(err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    
    console.log('connected as id ' + connection.threadId);
});

// connection.query('Select 1 + 1 AS solution', function(error, results, fields) {
//     if(error) throw error;
//     console.log('The solution is ', results[0].solution);
// });

// connection.query('Select * from products', function(error, results, fields) {
//     if(error) throw error;
//     console.log(JSON.stringify(results, undefined, 2));
// })


var sqlInsert = "INSERT INTO users (Name, Address, ZipCode, Country, Email, Password) VALUES ";
var values =  ['Name',
                'Address',
                'ZipCode',
                'Country',
                'Email',
                'Password'];
// connection.query("INSERT INTO users (Name, Address, ZipCode, Country, Email, Password) VALUES ('Savannah', '456 South Street', 98765, 'US', 'anotherone@test.com', 'Testing')", function(error, results, fields) {
//     if(error) throw error;
//     console.log(`Inserted values into sql`)
// })

connection.query(sqlInsert, [values], function(error, results, fields){
    if(error) throw error;
    console.log(`Inserted values into sql`);
});


let name = req.body.custName;
let address = req.body.streetAddress;
let zipCode = req.body.zipCode;
let country = req.body.country;
let custEmail = req.body.custEmail;

connection.end();