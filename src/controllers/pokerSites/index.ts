import express from 'express'

import { getPokerSites } from './pokerSites.controller'

const router = express.Router()

router.route('/').get(getPokerSites)

export { router }
