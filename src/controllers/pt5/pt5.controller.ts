import { Request, Response } from 'express'

import { badRequest, okay } from '../../utils/httpResponses'
import { generateRandomValue } from '../../utils/generateRandomValue'
import supportedSites from '../../mocks/supportedSites.json'
import mockSettings from '../../mocks/siteSettings.json'
import reportingSettings from '../../mocks/reportingSettings.json'
import statDefinitions from '../../mocks/statDefinitions.json'
import statVariables from '../../mocks/statVariables.json'
import statColumns from '../../mocks/statColumns.json'
import statFunctions from '../../mocks/statFunctions.json'
import statOperators from '../../mocks/statOperators.json'
import holecards from '../../mocks/holecards.json'
import tags from '../../mocks/tags.json'
import players from '../../mocks/players.json'
import searchPlayers from '../../mocks/searchPlayers.json'

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

  if (category === 'Reporting') {
    return okay(res, reportingSettings)
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

export const getStatDefinitions = (req: Request, res: Response) => {
  const { game, type } = req.body

  okay(res, { response: successResponse, stats: statDefinitions })
}

export const getStatVariables = (req: Request, res: Response) => {
  const { game, type } = req.body

  okay(res, {
    response: successResponse,
    variables: statVariables,
  })
}

export const getStatColumns = (req: Request, res: Response) => {
  const { game, type } = req.body

  okay(res, {
    response: successResponse,
    columns: statColumns,
  })
}

export const getStatFunctions = (req: Request, res: Response) => {
  okay(res, {
    response: successResponse,
    functions: statFunctions,
  })
}

export const getStatOperators = (req: Request, res: Response) => {
  okay(res, {
    response: successResponse,
    operators: statOperators,
  })
}

export const validateStat = (req: Request, res: Response) => {
  const { game, type, validate_type, express } = req.body

  okay(res, {
    userMessage: {
      message: 'Expression is valid',
      message_type: 'success',
    },
  })
}

export const getHandRangeModels = (req: Request, res: Response) => {
  const { game } = req.body

  okay(res, {
    response: successResponse,
    models: [
      {
        name: 'Sklansky-Karlson',
        color: '#ff0000',
        game,
        is_protected: true,
        holecards,
      },
    ],
  })
}

export const getHandRangeTextFromCards = (req: Request, res: Response) => {
  const { game, cards } = req.body

  okay(res, {
    response: successResponse,
    hand_range_text: cards.join(','),
    hands_included_percent: cards.length === 0 ? 0 : Math.round(Math.random() * 10000) / 100,
  })
}

export const saveHandRangeModel = (req: Request, res: Response) => {
  const { name, game, cards } = req.body

  okay(res, { response: successResponse })
}

export const deleteHandRangeModel = (req: Request, res: Response) => {
  const { name } = req.body

  okay(res, { response: successResponse })
}

export const importHandRangeModel = (req: Request, res: Response) => {
  okay(res, { response: successResponse })
}

export const exportHandRangeModel = (req: Request, res: Response) => {
  okay(res, { response: successResponse })
}

export const getTags = (req: Request, res: Response) => {
  okay(res, tags)
}

export const saveTag = (req: Request, res: Response) => {
  okay(res, { response: successResponse })
}

export const deleteTag = (req: Request, res: Response) => {
  okay(res, { response: successResponse })
}

export const getPlayerList = (req: Request, res: Response) => {
  const { fetch_active, fetch_recent } = req.body

  okay(res, players)
}

export const searchPlayerList = (req: Request, res: Response) => {
  const { search, limit } = req.body

  const players = searchPlayers.players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase()),
  )

  okay(res, { ...searchPlayers, players })
}

export const setActivePlayer = (req: Request, res: Response) => {
  const { player_id } = req.body

  okay(res, { response: successResponse })
}
