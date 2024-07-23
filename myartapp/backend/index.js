const express = require('express');
const mongoDB = require('./mongoose');
const app = express();
const port = 5000;

mongoDB();

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
