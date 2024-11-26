const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Javapoint!');
});

app.listen(3010, () => {
  console.log('Server started on port 3010');
});