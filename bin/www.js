const http = require('http');

const serverHandle = require('../app.js');

const PORT = 5000;

const server = http.createServer(serverHandle)

server.listen(PORT, () => {
    console.log('Node server running at localhost:5000');
})