'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = 'services.firstapp.wcccloud.local';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the club, Buddy!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);