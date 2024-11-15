const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World from Dockerized Node.js App!');
});

const port = 3000;
app.listen(port, '0.0.0.0', () => { // <-- Correct syntax here
  console.log(`Server running on http://localhost:${port}`);
});
