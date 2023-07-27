import { Request, Response } from 'express'

import { okay } from '../../utils/httpResponses'
import { generateHandsSummaryData } from '../../utils/generateHandsSummaryData'

export const openVideoPlayerPlayPoker = (req: Request, res: Response) => {
  const data = {
    window_id: 'video_player',
    video_id: 'play_poker_video',
  }

  okay(res, data)
}

export const openConfigureSitesWindow = (req: Request, res: Response) => {
  const data = {
    window_id: 'configure_sites',
    options: { side_id: Math.floor(Math.random() * 100) % 50 },
  }

  okay(res, data)
}

export const viewActiveTables = (req: Request, res: Response) => {
  const data = { report_name: 'view_active_tables' }

  okay(res, data)
}

export const viewTodaysHandsSummaryCash = (req: Request, res: Response) => {
  okay(res, generateHandsSummaryData('view_todays_hands_cash'))
}

export const viewTodaysHandsSummaryTournament = (req: Request, res: Response) => {
  okay(res, generateHandsSummaryData('view_todays_hands_tournament'))
}

export const viewTodaysHandsMyHandsCash = (req: Request, res: Response) => {
  okay(res, generateHandsSummaryData('view_todays_hands_myhands_cash'))
}

export const viewTodaysHandsMyHandsTournament = (req: Request, res: Response) => {
  okay(res, generateHandsSummaryData('view_todays_hands_myhands_tournament'))
}
