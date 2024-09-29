const express = require('express')
const app = express()
const fs = require('fs');

app.get('/',function(req,res){
    res.send('Default');
});

app.get('/home',function(req,res){
    // fs.readFile('home.html',function(err,data){
    //     if(err){
    //         res.status(500).send("error");
    //         return;
    //     }
    //     res.send(data);
    // })
    res.sendFile('E:/Express/home.html',(err,data)=>{
        if (err) {
            throw err
        }
    })
});

app.listen(4008,function(){
    console.log('app.js is listening to http://localhost:4008/')
});