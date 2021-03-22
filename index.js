const express = require ('express');
const path = require ('path');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  const buttonName = 'Hey, whatsup';
  res.render('index', {buttonName: buttonName, title: "This is a title", labelText: "Digite algo: "});
})

app.listen(3005, () => {
  console.log("server running on port 3005");
})

