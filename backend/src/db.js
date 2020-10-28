var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/porter', function (err, db) {
  if (err) throw err
  
// write your operations to the db.
  db.collection('test').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})