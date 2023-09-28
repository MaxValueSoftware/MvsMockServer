import { Request, Response } from 'express'

import { okay } from '../../utils/httpResponses'
import hudOptions from '../../mocks/hudOptions.json'

const successResponse = {
  response: {
    code: 200,
    message: 'Success',
  },
}

export const getHudOptions = (req: Request, res: Response) => {
  const { id } = req.body

  return okay(res, hudOptions)
}
