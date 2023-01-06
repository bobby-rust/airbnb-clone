const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const app = express();
mongoose.set('strictQuery', false);
const Listing = require('./models/listing')
// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
//   if (err) throw err

//   const db = client.db('animals')

//   db.collection('mammals').find().toArray((err, result) => {
//     if (err) throw err

//     console.log(result)
//   })
// })

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => { console.log(error) })
db.once("open", () => { console.log("Server connected to database") })

app.use(express.json());
const listingsRouter = require('./routes/listings');

app.use('/api/listings', listingsRouter);

app.listen(3000, () => {
    console.log("server started")
})