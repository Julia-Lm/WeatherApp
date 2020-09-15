const express = require("express");
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;

let db;

const app = express();
let bodyParser = require('body-parser');

const url = 'mongodb://localhost:27017';
const dbName = 'projectWeather';
const client = new MongoClient(url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));


app.get('/cities/all',(req, res) => {
    db.collection('cities').find().toArray((err, docs) => {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get('/cities/:id',(req, res) => {
    db.collection('cities').findOne({_id:ObjectID(req.params.id)},(err, docs) =>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get('/cities',(req, res) => {
    db.collection('cities').find().toArray((err, docs) => {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.post('/cities/add',(req, res) => {
    let city = {
        cityName: req.body.cityName
    }
   db.collection('cities').insertOne(city, (err, result) => {
       if(err){
        console.log(err);
        return res.sendStatus(500);
       }
       res.send(city);
   })
});

app.put('/cities/:id',(req, res) =>{
    db.collection('cities').updateOne({_id: ObjectID(req.params.id)},{$set: {cityName: req.body.cityName}},(err, result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/cities/:id',(req, res) => {
    db.collection('cities').deleteOne({_id: ObjectID(req.params.id)},(err, result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

client.connect(() => {
    console.log('Connected successfully to server');
    db = client.db(dbName);
    
    app.listen(3000, () => console.log('API started'));
})



