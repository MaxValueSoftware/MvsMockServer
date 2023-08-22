import express from 'express'

import {
  getTableReport,
  getSupportedSites,
  triggerAutoImport,
  openWindow,
  saveSetting,
  getSetting,
  logMessage,
} from './pt5.controller'

const router = express.Router()

router.route('/queryReport').get(getTableReport)
router.route('/getSupportedSites').get(getSupportedSites)
router.route('/triggerAutoImport').put(triggerAutoImport)
router.route('/openWindow').put(openWindow)
router.route('/saveSetting').post(saveSetting)
router.route('/getSetting').get(getSetting)
router.route('/logMessage').post(logMessage)

export { router }
