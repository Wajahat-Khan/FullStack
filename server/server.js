import express from 'express'
import config from '../config'
import apiRouter from '../api'
import path from 'path'
import sassMiddleware from 'node-sass-middleware';

const server=express()

server.use(sassMiddleware({
  src:path.resolve('sass'),
  dest:path.resolve('public')
}));

server.set('view engine', 'ejs')
server.use(express.static('public'))
server.get('/',(req,res)=>{
  res.render('index')
});

import '../serverRender';

server.use('/api',apiRouter);
server.listen(config.port, config.Host,()=>{
  console.log('listening to port', config.port);
})