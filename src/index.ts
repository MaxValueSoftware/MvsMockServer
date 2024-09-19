import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import {
  actionFiltersRouter,
  hudOptionsRouter,
  pokerSitesRouter,
  pt5CashFiltersRouter,
  pt5Router,
} from './controllers'

dotenv.config()

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/pt5', pt5Router)
app.use('/hud-options', hudOptionsRouter)
app.use('/poker-sites', pokerSitesRouter)
app.use('/pt5-cash-filters', pt5CashFiltersRouter)
app.use('/action-filters', actionFiltersRouter)

app.listen(process.env.PORT, () => {
  console.log(`Sever is running on ${process.env.PORT}`)
})
