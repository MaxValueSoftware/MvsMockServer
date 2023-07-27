import express from 'express'
import dotenv from 'dotenv'

import { pt5Router } from './controllers'

dotenv.config()

const app = express()

app.use('/pt5', pt5Router)

app.listen(process.env.PORT, () => {
  console.log(`Sever is running on ${process.env.PORT}`)
})
