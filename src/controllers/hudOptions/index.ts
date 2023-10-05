import express from 'express'

import { getHudOptions } from './hudOptions.controller'

const router = express.Router()

router.route('/').get(getHudOptions)

export { router }
