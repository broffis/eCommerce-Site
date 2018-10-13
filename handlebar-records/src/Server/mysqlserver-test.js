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

connection.query('Select 1 + 1 AS solution', function(error, results, fields) {
    if(error) throw error;
    console.log('The solution is ', results[0].solution);
});

connection.query('Select * from products', function(error, results, fields) {
    if(error) throw error;
    console.log(JSON.stringify(results, undefined, 2));
})

connection.end();