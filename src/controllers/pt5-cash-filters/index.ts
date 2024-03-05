import express from 'express'

import {
  getGameDetails,
  getHandDetails,
  getSessionDetails,
  getHandValues,
  getBoardTexture,
  getActionsAndOpportunities,
} from './pt5CashFilters.controller'

const router = express.Router()

router.route('/game-details').get(getGameDetails)
router.route('/hand-details').get(getHandDetails)
router.route('/session-details').get(getSessionDetails)
router.route('/hand-values').get(getHandValues)
router.route('/board-texture').get(getBoardTexture)
router.route('/actions-opportunities').get(getActionsAndOpportunities)

export { router }
