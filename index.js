const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/fa', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'));


app.use(express.static(path.join(__dirname, "public")));

const data = [{
    profile: "",
    username: "Rama Krishna",
    likes: 120
  },
  {
    profile: "",
    username: "Aditya",
    likes: 150
  }];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => { 
  res.render('login');
});

app.get('/signup', (req,res) => {
  res.render('signup');
});

app.post('/login',(req,res) => {
  res.render('login');
});

app.post('/home', (req, res) => {
  const { username, password } = req.body;
  res.render('home', {username,data});
});

app.use((req,res)=>{
    console.log("Request Received");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});