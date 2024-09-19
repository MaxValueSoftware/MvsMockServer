import express from 'express'

import {
  activeBlock,
  applyFilter,
  blockOperation,
  openWindow,
  reset,
} from './actionFilters.controller'

const router = express.Router()

router.route('/openWindow').post(openWindow)
router.route('/activeBlock').post(activeBlock)
router.route('/blockOperation').post(blockOperation)
router.route('/applyFilter').post(applyFilter)
router.route('/reset').post(reset)

export { router }
