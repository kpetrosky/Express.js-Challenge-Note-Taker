// create server 
//get routes models
// get post
//write own points from DB read and write

//npm init -y
//node server.js

// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const util = require('util');

// // Helper method for generating unique ids
// const uuid = require('./helpers/uuid');

// const PORT = 3001;

// const app = express();

// // Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

//get route for homepage
app.get('/api/notetaker', (req, res) =>{
    res.json(`${req.method} request received`);
    console.info(req.rawHeaders);
    console.info(`${req.method} request received`);
});



// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );


// app.get('/api/tips', (req, res) => {
//     console.info(`${req.method} request received for tips`);
//     readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
//   });
  
//   // POST Route for a new UX/UI tip
//   app.post('/api/tips', (req, res) => {
//     console.info(`${req.method} request received to add a tip`);
  
//     const { username, topic, tip } = req.body;
  
//     if (req.body) {
//       const newTip = {
//         username,
//         tip,
//         topic,
//         tip_id: uuid(),
//       };
  
//       readAndAppend(newTip, './db/tips.json');
//       res.json(`Tip added successfully 🚀`);
//     } else {
//       res.error('Error in adding tip');
//     }
//   });