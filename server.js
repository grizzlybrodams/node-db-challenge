const express = require('express');
const helmet = require('helmet');
const projectRouters = require('./Routers/projectRouters');
const taskRouters = require('./Routers/taskRouters');
const resourceRouters = require('./Routers/resourceRouters');

const server = express();


server.use(helmet());
server.use(express.json());
server.use('/api/project' , projectRouters);
server.use('/api/tasks', taskRouters);
server.use('/api/resources', resourceRouters);

server.get('/', (req,res) => {
  res.send(`
    <h1> Hello World </h1>
    
  `);
});


module.exports = server;