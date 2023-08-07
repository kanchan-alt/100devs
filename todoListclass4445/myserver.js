require('dotenv').config()

const express = require('express')
const app = express();

const MongoClient = require('mongodb').MongoClient
PORT = 2121

// connection with Mongodb

let db,
     dbConnectionStr = process.env.DB_STRING,
     dbName = 'todo'


 MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true })
     .then(client => {
        console.log(`Connection to ${dbName} Database`);
        db = client.db(dbName)
     })    



 app.set('view engine', 'ejs');
 app.use(express.static('public'))
 app.use(express.urlencoded({ extended: true}))  
 app.use(express.json()) 

//get

 app.get('/', async(req, res ) => {
   db.collection('todos').find().toArray()
   .then(data => {
      db.collection('todos').countDocuments({ completed: false})
       .then(itemsLeft => {
         res.render('index.ejs', { items: data, left: itemsLeft})
       } )
   })
   .catch(error => console.error(error))
   
 })

 //post(creating list)

 app.post('/addTodo', (req, res) => {
   //  console.log(req);
   //  console.log(req.body);
    db.collection('todos').insertOne({thing: req.body.todoItem, completed: false})
    .then( result => {
        console.log('Todo Added')
        res.redirect('/')
    })
    .catch(error => console.error(error))

 })

 //put(updating)
 
 app.put('/markComplete', (req, res) => {
  
    db.collection('todos').updateOne({thing: req.body.itemFromJS},
      {
         $set: {
            completed:true
         }
      },
      {
         sort: {_id: -1},
         upsert:false
      })
    .then( result => {
        console.log('Mark Complete')
        res.json('Market Complete')
    })
    .catch(error => console.error(error))

 })


 app.put('/markUnComplete', (req, res) => {
  
   db.collection('todos').updateOne({thing: req.body.itemFromJS},
     {
        $set: {
           completed:false
        }
     },
     {
        sort: {_id: -1},
        upsert:false
     })
   .then( result => {
       console.log('Marked Complete')
       res.json('Marked Complete')
   })
   .catch(error => console.error(error))

})



//delete

app.post('/deleteItem', (req, res) => {
  
   db.collection('todos').deleteOne({thing: req.body.itemFromJS})
   .then( result => {
       console.log('Todo Deleted')
       res.json('Todo Deleted')
   })
   .catch(error => console.error(error))

})


app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT} Port`);
 })