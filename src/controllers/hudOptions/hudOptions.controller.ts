import { Request, Response } from 'express'

import { okay } from '../../utils/httpResponses'
import hudOptions from '../../mocks/hudOptions.json'

export const getHudOptions = (req: Request, res: Response) => {
  return okay(res, hudOptions)
}
