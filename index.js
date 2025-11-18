const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/home', (req, res) => {
  const { username, password } = req.body;
  res.send(`Welcome ${username}!`);
});

app.use((req,res)=>{
    console.log("Request Received");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});