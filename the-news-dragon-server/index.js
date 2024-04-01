const express = require('express')
const app = express()
const port = 5000
const data = require('./data.json')
const  cors = require('cors')

app.get('/', (req, res) => {
  res.send('Dragon server is running')
})
app.use(cors())
app.get('/data' , (req, res) => {
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})