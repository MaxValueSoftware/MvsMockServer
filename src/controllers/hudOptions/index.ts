import express from 'express'

import { getHudOptions } from './hudoptions.controller'

const router = express.Router()

router.route('/').get(getHudOptions)

export { router }
