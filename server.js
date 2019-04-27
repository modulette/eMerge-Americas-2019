// load the environment variables
const http = require('http');
const socket = require('socket.io');

const app = require('./app');
const PORT = process.env.PORT || 5000;

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

// creates a socket server
const createSocketServer = (socket) =>{
  const server = http.createServer(app).listen(PORT, () => {
    console.log(`Hello World 🌎 I'm Listening on port ${PORT} `);
  });
  const socketServer = socket(server);
  socketServer.on('connection', socket => {
    // initiates socket event
    let room = '';
   // create room and emit a creation event
    const create = err => {
      if (err) {
        return console.log(err);
      }
      socket.join(room);
      socket.emit('create');
    };
// sending to all clients in the room (channel) except sender
  socket.on('message', message => socket.broadcast.to(room).emit('message', message));
  socket.on('find', () => {
    // define the room from the incoming url
    const url = socket.request.headers.referer.split('/');
    room = url[url.length - 1];
    const sr = socketServer.sockets.adapter.rooms[room];
    if (sr === undefined) {
      // no room with such name is found so create it
      socket.join(room);
      socket.emit('create');
    } else if (sr.length === 1) {
      socket.emit('join');
    } else {
      // @to-do increase max to more than two clients limitation of sever
      socket.emit('full', room);
    }
  });
  socket.on('auth', data => {
    data.sid = socket.id;
    // sending to all clients in the room (channel) except sender
    socket.broadcast.to(room).emit('approve', data);
  });
  socket.on('accept', id => {
    socketServer.sockets.connected[id].join(room);
    // sending to all clients in 'game' room(channel), include sender
    socketServer.in(room).emit('bridge');
  });
  socket.on('reject', () => socket.emit('full'));
  socket.on('leave', () => {
    // sending to all clients in the room (channel) except sender
    socket.broadcast.to(room).emit('hangup');
    socket.leave(room);});
  });
}

createSocketServer(socket);
// createSimpleServer();