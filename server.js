import express from 'express';
import pkg from 'pg';
import https from 'https';
import fs from 'fs';
import { parse } from 'url';
import next from 'next';
import { Server as SocketIOServer } from 'socket.io';

const { Client } = pkg;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const expressApp = express();
const port = parseInt(process.env.PORT || '3001', 10);

//DB: fluxsend_db
const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});

//Load SSL certificates and key
const sslOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
};

console.log(client);

const createDB = async () => {
  try {
    await client.connect();
    console.log('created db');
  } catch (err) {
    console.log(err);
    console.log('Already created');
  } finally {
    await client.end();
  }
};

app.prepare().then(() => {
  expressApp.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  const server = https.createServer(sslOptions, expressApp);

  const io = new SocketIOServer(server);
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('signal', (data) => {
      console.log('Received signaling data:', data);
      socket.broadcast.emit('signal', data);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  server.listen(port, async () => {
    await createDB();
    console.log(`Flux is securely listening on https://localhost:${port}`);
  });
});
