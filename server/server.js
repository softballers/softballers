const express = require('express');
const app = express();
const path = require('path');
const PORT = process.ENV || 8080;

app.use(express.static(path.join(__dirname, '../client', 'dist' ))).listen(PORT, () => {console.log(`listening on ${PORT}, homie`)});