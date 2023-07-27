import express from 'express'

import {
  openVideoPlayerPlayPoker,
  openConfigureSitesWindow,
  viewActiveTables,
  viewTodaysHandsSummaryCash,
  viewTodaysHandsSummaryTournament,
  viewTodaysHandsMyHandsCash,
  viewTodaysHandsMyHandsTournament,
} from './pt5.controller'

const router = express.Router()

router.route('/openVideoPlayerPlayPoker').get(openVideoPlayerPlayPoker)
router.route('/openConfigureSitesWindow').get(openConfigureSitesWindow)
router.route('/viewActiveTables').get(viewActiveTables)
router.route('/viewTodaysHandsSummaryCash').get(viewTodaysHandsSummaryCash)
router.route('/viewTodaysHandsSummaryTournament').get(viewTodaysHandsSummaryTournament)
router.route('/viewTodaysHandsMyHandsCash').get(viewTodaysHandsMyHandsCash)
router.route('/viewTodaysHandsMyHandsTournament').get(viewTodaysHandsMyHandsTournament)

export { router }
