require('dotenv').config()
const express = require('express')
const app = express()

//Mongodb import

const MongoClient = require('mongodb').MongoClient

const PORT = 2121

// MongoDB Connection
let db,
    dbConnectinStr = process.env.DB_STRING,
    dbName = 'rap'


    MongoClient.connect(dbConnectinStr, {useUnifiedTopology:true})
       .then(client => {
        console.log(`connection to ${dbName} Database`)
        db = client.db(dbName)
       })

// Middleware used in our APP
       app.set('view engine', 'ejs')
       app.use(express.static('public'))
       app.use(express.urlencoded({extended:true}))
       app.use(express.json())


 // Bussiness Logic Part
 
     //get
     app.get('/', (req, res) => {
        db.collection('rappers').find().sort({likes:-1}).toArray()
        .then(data => {
            res.render('index.ejs', { info: data })
        })
     })
     //post
     //put
     //delete






       app.listen(PORT, ()=> {
        console.log('Server running pn port ${Port}');
       })