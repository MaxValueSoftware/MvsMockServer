import express from 'express'

import {
  getGameDetails,
  getHandDetails,
  getSessionDetails,
  getHandValues,
  getBoardTexture,
  getActionsAndOpportunities,
  saveFilter,
  deleteFilter,
  deleteFilterGroup,
  mergeGroup,
  inverseGroup,
  ungroup,
} from './pt5CashFilters.controller'

const router = express.Router()

router.route('/game-details').get(getGameDetails)
router.route('/hand-details').get(getHandDetails)
router.route('/session-details').get(getSessionDetails)
router.route('/hand-values').get(getHandValues)
router.route('/board-texture').get(getBoardTexture)
router.route('/actions-opportunities').get(getActionsAndOpportunities)

router.route('/addFilter').post(saveFilter)
router.route('/delete').delete(deleteFilter)
router.route('/deleteGroup').delete(deleteFilterGroup)
router.route('/groupFilters').post(mergeGroup)
router.route('/inverseFilter').post(inverseGroup)
router.route('/ungroupFilters').post(ungroup)

export { router }
