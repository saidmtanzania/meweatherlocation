const express = require('express');
const https = require('https');
const bodyParser = require ('body-parser');
const request = require('request');

const app = express();
      app.use(express.static('public'));
      app.set ('view engine', 'ejs');
      app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.render("home");
});

app.post('/', (req,res)=>{

});

app.listen(3000,()=>{
  console.log("server is up and running");
});
