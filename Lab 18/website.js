const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url=="/home"){
        fs.readFile("home.html",(err,data)=>{
            if(err){
                res.end(err)
            }else{
                res.writeHead(200,'content-type','text/html')
                res.end(data)
            }
        })
    }else if(req.url=="/intro"){
        fs.readFile("intro.html",(err,data)=>{
            if(err){
                res.end(err)
            }else{
                res.writeHead(200,'content-type','text/html')
                res.end(data)
            }
        })
    }
})

server.listen(3050,()=>{
    console.log("Server started at 3050")
})