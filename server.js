// create server 
//get routes models
// get post
//write own points from DB read and write

//npm init -y
//node server.js
//npm i uniqid
//npm install -g heroku
//heroku --version
//heroku login
//heroku create

const express = require('express');
const path = require('path');
//like fs built into node, just in call it
const fs = require('fs');
const util = require('util');
const uniqid = require('uniqid'); 

// // Helper method for generating unique ids
//go get unique id npm

const PORT = process.env.PORT || 3001;
//use other service other than git hub like heroku requries 5 digits.

const app = express();
//triggering express which starts servers and how it should run

// // Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//accesses the pretty stuff

//get route for homepage
app.get('/api/notes', (req, res) =>{
    fs.readFile("./db/db.json", "utf8", (error, data)=>{
        console.log(data);
        const notes = JSON.parse(data);
        console.log(notes);
        res.json(notes);
    } );
   });


app.post('/api/notes', (req, res) => {
    console.log(req.body);
    req.body.id = uniqid();
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (error, data) =>{
        console.log(data);
        const notes = JSON.parse(data);
        console.log(notes);
        notes.push(req.body);
    fs.writeFile("./db/db.json",JSON.stringify(notes), error =>{
        if(error) throw error;
        return res.json(notes);
    });    
    })
  });
  
//similar to above but with delete stuff
app.delete('/api/notes', (req, res) => {
  console.log(req.body);
  req.body.id = uniqid();
  console.log(req.body);
  fs.readFile("./db/db.json", "utf8", (error, data) =>{
      console.log(data);
      const notes = JSON.parse(data);
      console.log(notes);
      notes.push(req.body);
  fs.writeFile("./db/db.json",JSON.stringify(notes), error =>{
      if(error) throw error;
      return res.json(notes);
  });    
  })
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
//gives the app all the rules and expectations then askes the app to start
//view-html route what the users sees when visiting 
//api route is triggered by a fetch call