const express = require('express');
const mongoDB = require('./mongoose');
const app = express();
const port = 5000;
const cors = require('cors');
mongoDB();

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-requested-Width, Content-Type, Accept "
//   );
//   next();

// })

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
