import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { pt5Router } from './controllers'

dotenv.config()

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/pt5', pt5Router)

app.listen(process.env.PORT, () => {
  console.log(`Sever is running on ${process.env.PORT}`)
})
