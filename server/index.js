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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../purchase'))
})
// try {
//     error();
//   } catch (error) {
//     console.error(error);
//     rollbar.error(`triggered so now i wont work cus you triggered me`)
// }

// try {
//     critical();
//   } catch (error) {
//     console.error(error);
//     rollbar.critical(`CRITICAL SHOT`)
// }

// try {
//     warning();
//   } catch (error) {
//     console.error(error);
//     rollbar.warning(`FINAL WARNING DUDE BRO`)
// }

const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`listening on ${PORT}`)})