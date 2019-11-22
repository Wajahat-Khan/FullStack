import express from 'express'
import config from '../config.js'
import fs from 'fs'

const server=express()

server.get('/',(req,res)=>{
  res.send("Welcome")
})

server.get('/about.html',(req,res)=>{
  fs.readFile('./src/about.html',(err,data)=>{
  
    res.send(data.toString());
  })

})

server.listen(config.port,()=>{
  console.log('listening to port', config.port);
})