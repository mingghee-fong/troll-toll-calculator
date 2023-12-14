import express from 'express'
import * as dbBridge from '../db/bridges.ts'

const router = express.Router()

// -- MVP -- //

//GENERAL BRIDGES ROUTES

// GET /api/v1/bridges
router.get('/', async (req, res) => {
  try {
    const bridges = await dbBridge.getAllBridgesDb()
    res.json(bridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// GET /api/v1/bridges/:id (Single Bridge)
router.get('/:id', async (req, res) => {
  const bridgeId = Number(req.params.id)
  try {
    const bridge = await dbBridge.getBridgeByIdDb(bridgeId)
    res.json(bridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// -- STRETCH -- //

export default router

//TEST
