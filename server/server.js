import express from 'express'
import config from '../config'
import apiRouter from '../api'

const server=express()
server.set('view engine', 'ejs')
server.use(express.static('public'))
server.get('/',(req,res)=>{
  res.render('index')
});



server.use('/api',apiRouter);
server.listen(config.port,()=>{
  console.log('listening to port', config.port);
})