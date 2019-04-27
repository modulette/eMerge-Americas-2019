// load the environment variables
const http = require('http');
const socket = require('socket.io');

const app = require('./app');
const PORT = process.env.PORT || 3001;

/**
 * This function takes the approach described in the node js best practices
 * abstracting app and server from each other
 * @see https://github.com/i0natan/nodebestpractices/blob/master/sections/projectstructre/separateexpress.md
 * this will simply create a server with the app.js listening on PORT
 */
const createSimpleServer = () => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Hello World 🌎 I'm Listening on port ${PORT} `);
  });
};

const createSocketServer = (socket) =>{
  const server = http.createServer(app).listen(PORT, () => {
    console.log(`Hello World 🌎 I'm Listening on port ${PORT} `);
  });
  const socketServer = socket(server);
  socketServer.on('connection', socket => {
    let room = '';
    const create = err => {
      if (err) {
        return console.log(err);
      }
      socket.join(room);
      socket.emit('create');
    };
  });
}

createSocketServer(socket);
// createSimpleServer();