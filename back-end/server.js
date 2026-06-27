const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.json({ message: 'API is running!' }))

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server runs in http://localhost:${process.env.PORT || 5000}`)
})