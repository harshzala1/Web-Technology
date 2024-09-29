//exists
const fs = require('fs')
fs.exists("E:\\WT\\JS\\Lab 17\\hello.js",(exists)=>{
    console.log(exists?'Found':'Not found!');
})  

//stat
// const fs = require('fs')
fs.stat('index.js',(err,data)=>{
    console.log("Hello World");
})

//Synchronous
//const fs = require('fs')
const data = fs.readFileSync('hello_everyone.txt')
console.log(data.toString())

//Asynchronous
//const fs =require('fs')
fs.readFile('darshan.txt',(err,data)=>{
    console.log(data.toString())
})

//unlink
// const fs = require('fs')
fs.unlink('hello2.txt',(err)=>{
    if(err){ throw err };
    console.log("File deleted")
})

// //rename
// // const fs = require('fs')
fs.rename('hello3.txt','hello_everyone.txt',(err)=>{
    if(err){throw err}
    console.log("File deleted")
})