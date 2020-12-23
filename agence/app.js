require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const agentRouter = require('./routes/agent');


app.use('/agents', agentRouter);

app.listen( port, ()=>{
  console.log('Server running');
})

module.exports = app;