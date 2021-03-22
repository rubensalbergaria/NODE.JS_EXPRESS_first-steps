const express = require ('express')

const app = express();

app.get('/', (req, res) =>{
  res.send('Hello Word!')
})

app.listen(3005, () => {
  console.log("server running on port 3005");
})

