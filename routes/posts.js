const express = require('express')
// create a similar app , but is a mini app that is independent by main router function
const router = express.Router()


router.get('/', (req, res) => {
  res.send("Posts List")
});

router.get('/newpost', (req, res) => {
  res.send("Post New Form")
});

module.exports = router;