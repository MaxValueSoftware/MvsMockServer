import { Request, Response } from 'express'

import { okay } from '../../utils/httpResponses'
import pokerSties from '../../mocks/pokerSites.json'

export const getPokerSites = (req: Request, res: Response) => {
  return okay(res, pokerSties)
}
