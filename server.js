const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// next source code is from top to bottom ... be advice on defined source code

app.use(logger);

// app.set('view engine', 'pug'); // with the pug example 

app.get('/', (req, res, next) => {
  console.log('Here');
  //res.sendStatus(500);
  //res.send('Hi');
  //res.status(500).send("Hi");
  
  //res.download("server.js"); // if you want to work this line of source code then don't uncomment the next line of source code !
  
  //res.status(500).json({ message: "Error"});

  //res.render('index', {text_wrong: "World"});
  res.render('index', {text : "World"});
})

const userRouter = require("./routes/users") // URL http://localhost:3000/users
const postRouter = require("./routes/posts") // URL http://localhost:3000/posts

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.get("/test", (req, res) => {
  res.send("routing test !")
});

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000);