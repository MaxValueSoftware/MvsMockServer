import { Request, Response } from 'express'

import { created, okay, updated } from '../../utils/httpResponses'
import gameDetails from '../../mocks/pt5-cash-filters/gameDetails.json'
import handDetails from '../../mocks/pt5-cash-filters/handDetails.json'
import sessionDetails from '../../mocks/pt5-cash-filters/sessionDetails.json'
import handValues from '../../mocks/pt5-cash-filters/handValues.json'
import boardTexture from '../../mocks/pt5-cash-filters/boardTexture.json'
import actionsAndOpportunities from '../../mocks/pt5-cash-filters/actionsAndOpportunities.json'

export const getGameDetails = (req: Request, res: Response) => {
  return okay(res, gameDetails)
}

export const getHandDetails = (req: Request, res: Response) => {
  return okay(res, handDetails)
}

export const getSessionDetails = (req: Request, res: Response) => {
  return okay(res, sessionDetails)
}

export const getHandValues = (req: Request, res: Response) => {
  return okay(res, handValues)
}

export const getBoardTexture = (req: Request, res: Response) => {
  return okay(res, boardTexture)
}

export const getActionsAndOpportunities = (req: Request, res: Response) => {
  return okay(res, actionsAndOpportunities)
}

export const saveFilter = (req: Request, res: Response) => {
  return created(res, req.body)
}

export const deleteFilter = (req: Request, res: Response) => {
  return updated(res, req.params.id)
}

export const deleteFilterGroup = (req: Request, res: Response) => {
  return updated(res, req.body.id)
}

export const mergeGroup = (req: Request, res: Response) => {
  return updated(res, req.body)
}

export const inverseGroup = (req: Request, res: Response) => {
  return updated(res, req.body)
}

export const ungroup = (req: Request, res: Response) => {
  return updated(res, req.body)
}
