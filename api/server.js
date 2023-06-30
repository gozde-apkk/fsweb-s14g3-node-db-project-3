const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const port = 9000;
const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.listen(port , () =>{
    console.log(`Server listening on ${port}`);
})

module.exports = server;