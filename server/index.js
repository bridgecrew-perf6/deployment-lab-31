const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '79a6013ae83a4ee5b41ff2f1ed6cdafd',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`listening on ${PORT}`)})