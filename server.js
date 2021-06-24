const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server is running on port:${port}`)
})
