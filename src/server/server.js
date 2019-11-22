import express from 'express'
import config from '../config.js'
import fs, { readdirSync } from 'fs'
import apiRouter from '../../api'

const server=express()

server.use(express.static('public'))
server.get('/',(req,res)=>{
  res.render('index')
});

server.set('view engine', 'ejs')
// server.get('/about.html',(req,res)=>{
//   fs.readFile('./src/about.html',(err,data)=>{
    
//     res.send(data.toString());
//   })

// })
server.use('/api',apiRouter);
server.listen(config.port,()=>{
  console.log('listening to port', config.port);
})