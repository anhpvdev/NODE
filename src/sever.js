import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from './route/web'
// import connection from './configs/database'

require('dotenv').config()

const app = express()
const port = process.env.PORT ||3000

configViewEngine(app)
initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})