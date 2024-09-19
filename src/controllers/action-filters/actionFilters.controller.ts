import { Request, Response } from 'express'
import { okay } from '../../utils/httpResponses'

const successResponse = {
  response: {
    code: 200,
    message: 'Success',
  },
}

export const openWindow = (req: Request, res: Response) => {
  okay(res, successResponse)
}

export const activeBlock = (req: Request, res: Response) => {
  okay(res, {
    ...successResponse,
    data: {
      block: 0,
      insertion_options: {
        pre: true,
        post: true,
      },
    },
  })
}

export const blockOperation = (req: Request, res: Response) => {
  okay(res, {
    ...successResponse,
    data: {
      blocks: [],
    },
  })
}

export const applyFilter = (req: Request, res: Response) => {
  okay(res, successResponse)
}

export const reset = (req: Request, res: Response) => {
  okay(res, successResponse)
}
