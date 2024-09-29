const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('Default');
});

app.get('/home',function(req,res){
    res.send('Hello Home');
});

app.get('/about',function(req,res){
    res.send('About');
});

app.get('/contact',function(req,res){
    res.send('Contact Details here');
});

app.get('/social',function(req,res){
    res.send('Social updates here');
});

app.listen(4004,function(){
    console.log('app.js is listening to http://localhost:4004/')
})