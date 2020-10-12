const express = require('express')
const app = express()
const port = 3000
var imagepro = require('./app')

app.get('/', (req, res) => res.send('Hello World!'))
const bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.json()

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(express.static('public'))


app.post('/name'  ,function (req, res) {
    var request = req.body.fname
    var request2 = req.body.fname2
    console.log(request)
    imagepro.processimage(request, request2)
    res.send('Got a POST request')
    //hjdsafaf
  })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))