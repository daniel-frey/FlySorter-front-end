const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  console.log(path.join(__dirname, '/../build', 'index.html'));
  res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

app.listen(port);
