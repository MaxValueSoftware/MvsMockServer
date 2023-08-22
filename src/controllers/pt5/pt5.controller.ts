import { Request, Response } from 'express'

import { badRequest, okay } from '../../utils/httpResponses'
import { generateRandomValue } from '../../utils/generateRandomValue'
import supportedSites from '../../mocks/supportedSites.json'

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
