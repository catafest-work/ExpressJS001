const express = require('express')
// create a similar app , but is a mini app that is independent by main router function
const router = express.Router()

router.get('/', (req, res) => {
  res.send("User List")
});

// this order of defined source code rows will prevent to show "Get User With ID" and show the "User New Form".
router.get('/new', (req, res) => {
  res.send("User New Form"); // http://localhost:3000/users/new
});

router.post('/', (req, res) => {
  res.send('Create User'); // if is not POST request then skip it 
});
// show by id methods 

// chaining with router.route 
router
.route("/:id")
.get((req, res) => {
  req.params.id
  res.send(`Get User With ID ${req.params.id}`) // URL http://localhost:3000/users/51
  })
.put((req, res) => {
  req.params.id
  res.send(`Update User With ID ${req.params.id}`) // URL http://localhost:3000/users/51
  })
.delete((req, res) => {
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`) // URL http://localhost:3000/users/51
  })

const users = [{name: "Kyle"}, {name: "Sally"}]
// send parameter id when go to a route has an id parameter
router.param("id", (req, res, next, id) => {
  //console.log(id);
  req.user = users[id]
  next();
})
/*
// basic get from router and this is similar with the botton chaining router.route 
router.get('/:id', (req, res) => {
  req.params.id
  res.send(`Get User With ID ${req.params.id}`) // URL http://localhost:3000/users/51
});

router.put('/:id', (req, res) => {
  req.params.id
  res.send(`Update User With ID ${req.params.id}`) // URL http://localhost:3000/users/51
});

router.delete('/:id', (req, res) => {
  req.params.id
  res.send(`Delete User With ID ${req.params.id}`) // URL http://localhost:3000/users/51
});
*/
// module export for import in the server.js area 
module.exports = router;