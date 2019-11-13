import express from 'express'
import config from '../config.js'
import fs from 'fs'

const server=express()

server.get('/',(req,res)=>{
  res.send("Welcome")
})

server.get('/about.html',(req,res)=>{
  fs.readFile('../about.html',(err,data)=>{
    if (err) {
      throw err;
  }
    res.send(data.toString());
  })

})

server.listen(config.port,()=>{
  console.log('listening to port', config.port);
})