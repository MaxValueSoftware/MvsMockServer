import { Request, Response } from 'express'

import { badRequest, okay } from '../../utils/httpResponses'
import { generateRandomValue } from '../../utils/generateRandomValue'
import supportedSites from '../../mocks/supportedSites.json'
import mockSettings from '../../mocks/siteSettings.json'

const successResponse = {
  response: {
    code: 200,
    message: 'Success',
  },
}

export const getTableReport = (req: Request, res: Response) => {
  // TODO: Need the mock data for this
  okay(res, [])
}

export const getSupportedSites = (req: Request, res: Response) => {
  okay(res, supportedSites)
}

export const triggerAutoImport = (req: Request, res: Response) => {
  const { action } = req.body

  if (action !== 'start' && action !== 'stop') {
    return badRequest(res, { message: 'Invalid action' })
  }

  okay(res, successResponse)
}

export const openWindow = (req: Request, res: Response) => {
  const { window_id, options } = req.body
  okay(res, successResponse)
}

export const saveSetting = (req: Request, res: Response) => {
  const { key, value } = req.body
  okay(res, successResponse)
}

export const getSetting = (req: Request, res: Response) => {
  const { key } = req.body
  okay(res, { ...successResponse, value: generateRandomValue() })
}

export const logMessage = (req: Request, res: Response) => {
  const { messages } = req.body
  okay(res, successResponse)
}

export const getSettings = (req: Request, res: Response) => {
  const { category, id } = req.body

  if (category === 'Site') {
    return okay(res, mockSettings)
  }

  okay(res, { settings: {}, response: successResponse })
}

export const autoDetectHandHistoryDirs = (req: Request, res: Response) => {
  const { site_id } = req.body

  okay(res, { directories: ['C:\\Users\\User\\Documents\\PokerStars\\HandHistory'] })
}

export const testEmailConnection = (req: Request, res: Response) => {
  okay(res, successResponse)
}

export const showOpenFilePicker = (req: Request, res: Response) => {
  okay(res, {
    files: [
      {
        path: 'C:\\Users\\Derek\\Documents',
        filename: 'string',
        filesize: 0,
      },
    ],
  })
}

export const showDirectoryPicker = (req: Request, res: Response) => {
  okay(res, { path: 'C:\\Users\\Derek\\Documents' })
}
