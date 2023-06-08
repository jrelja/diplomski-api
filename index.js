const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const oglasiRouter = require('./routes/oglasi.router')

app.use("/api/v1/oglasi", oglasiRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))