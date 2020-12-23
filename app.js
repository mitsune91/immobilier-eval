require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const agentRouter = require('./routes/agent');
const clientRouter = require('./routes/client');
const annonceRouter = require('./routes/annonce');
const bienRouter = require('./routes/bien');

app.use('/agent', agentRouter);
app.use('/client', clientRouter);
app.use('/annonce', annonceRouter);
app.use('/bien', bienRouter);

app.listen( port, ()=>{
  console.log('Server running');
})


module.exports = app;