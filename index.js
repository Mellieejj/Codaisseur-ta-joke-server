const express = require("express")
const cors = require("cors")
const db = require("./db")
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000


app.listen(port, () =>{
  console.log(`app listen on ${port}`)
})