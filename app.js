const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler); //event driven architecture

server.listen(3002);
