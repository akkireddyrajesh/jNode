const express = require('express');
const app = express();
const mongo = require('mongodb');

//mongo setup
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin123@ds151864.mlab.com:51864/mrsoft";
const dbName = "mrsoft";

//for connection
// MongoClient.connect(`${url}/${dbName}`, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

//insert data into mongoDB
MongoClient.connect(`${url}`, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var myobj = { name: "Prashant B", designation: "HR" };
    dbo.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

app.get('/', (req, res) => {
    console.log('we are at root');
    res.send('namasthey...');
});

app.get('/users', (req, res) => {
    console.log('nodemon listeing us');
    res.send('its nodemon time...');
});

app.listen(3000, () => {
    console.log("server is listening on port 3000....");
});