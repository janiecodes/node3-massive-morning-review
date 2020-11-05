require('dotenv').config();
//this goes and finds out env file and puts it on a global variable in node called process
//process is a giant variable with a lot of stuff on it

const express = require("express");
const massive = require('massive');
const cors = require("cors");
const cc = require("./controllers/characterController");
//massive is a library
//database are useful to store data persistently 

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()


app.use(cors())
app.use(express.json())

//massive is like axios where it's a promise to you need a .then and a .catch
//massive gets something like a database snapshot called a database instance
//db is the database that comes back from the request to the database
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized:false}
}).then((db) => {
    app.set('db', db)
}).catch(err => console.log(err));

app.get('/api/characters', cc.getAllCharacters)
app.get('/api/character/:id', cc.getCharacter)
app.post('/api/characters', cc.addCharacter)
app.put('/api/characters/:id', cc.editCharacter)
app.delete('/api/characters/:id', cc.deleteCharacter)

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))