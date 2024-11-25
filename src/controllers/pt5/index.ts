import express from 'express'

import {
  getTableReport,
  getSupportedSites,
  triggerAutoImport,
  openWindow,
  saveSetting,
  getSetting,
  logMessage,
  getSettings,
  autoDetectHandHistoryDirs,
  testEmailConnection,
  showOpenFilePicker,
  showDirectoryPicker,
  getStatDefinitions,
  validateStat,
  getStatVariables,
  getStatColumns,
  getStatFunctions,
  getStatOperators,
  getHandRangeModels,
  getHandRangeTextFromCards,
  saveHandRangeModel,
  deleteHandRangeModel,
  importHandRangeModel,
  exportHandRangeModel,
  getTags,
  saveTag,
  deleteTag,
  getPlayerList,
  searchPlayerList,
  setActivePlayer,
  saveSettings,
  getAvailableDatabases,
  messageBoxAction,
} from './pt5.controller'

const router = express.Router()

router.route('/queryReport').get(getTableReport)
router.route('/getSupportedSites').get(getSupportedSites)
router.route('/triggerAutoImport').put(triggerAutoImport)
router.route('/openWindow').put(openWindow)
router.route('/saveSetting').post(saveSetting)
router.route('/saveSettings').post(saveSettings)
router.route('/getSetting').get(getSetting)
router.route('/logMessage').post(logMessage)
router.route('/getSettings').post(getSettings)
router.route('/autoDetectHandHistoryDirs').post(autoDetectHandHistoryDirs)
router.route('/testEmailConnection').post(testEmailConnection)
router.route('/showOpenFilePicker').post(showOpenFilePicker)
router.route('/showDirectoryPicker').post(showDirectoryPicker)
router.route('/getStatDefinitions').post(getStatDefinitions)
router.route('/getStatVariables').post(getStatVariables)
router.route('/getStatColumns').post(getStatColumns)
router.route('/getStatFunctions').get(getStatFunctions)
router.route('/getStatOperators').get(getStatOperators)
router.route('/validateStat').post(validateStat)
router.route('/getHandRangeModels').post(getHandRangeModels)
router.route('/getHandRangeTextFromCards').post(getHandRangeTextFromCards)
router.route('/saveHandRangeModel').post(saveHandRangeModel)
router.route('/deleteHandRangeModel').post(deleteHandRangeModel)
router.route('/importHandRangeModel').post(importHandRangeModel)
router.route('/exportHandRangeModel').post(exportHandRangeModel)
router.route('/getTags').get(getTags)
router.route('/saveTag').put(saveTag)
router.route('/deleteTag').delete(deleteTag)
router.route('/getPlayerList').post(getPlayerList)
router.route('/searchPlayerList').post(searchPlayerList)
router.route('/setActivePlayer').put(setActivePlayer)
router.route('/getAvailableDatabases').get(getAvailableDatabases)
router.route('/messageBoxAction').post(messageBoxAction)

export { router }
