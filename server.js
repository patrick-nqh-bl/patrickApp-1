const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
app.get('/user', function (req, res) {
  res.send('Hello')
})
app.listen(port, ()=> {
    console.log("Server running on port " + port)
})